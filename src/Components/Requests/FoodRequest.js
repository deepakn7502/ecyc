import { Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import "../Requests/AddRequest.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DescriptionIcon from "@mui/icons-material/Description";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import PeopleIcon from "@mui/icons-material/People";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";

function FoodRequest({ openvalue, cancel }) {
  const [trustname, setTrustName] = useState("");
  const [categoryname, setCategory] = useState("");
  const [mealtype, setMealType] = useState("");
  const [count, setCount] = useState("");
  const [nmbr, setNmbr] = useState("");
  const [description, setDescription] = useState("");
  const time = serverTimestamp();

  const handleSubmit = async () => {
    const databaseRef = collection(db, "Common_Db");
    try {
      const Ref = await addDoc(databaseRef, {
        Category_name: categoryname,
        Description: description,
        Meal: mealtype,
        People_List: Number(count),
        PhoneNumber: Number(nmbr),
        Time: time,
        Trust_Name: trustname,
        about: "food",
      });
      cancel();
      await updateDoc(doc(db, "Common_Db", Ref.id), {
        id: Ref.id,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Modal open={openvalue} placement="bottom">
        <div className="input-content">
          <div className="header">
            <h1>Submit to Post Request</h1>
          </div>
          <div className="input-field food">
            <AccountBoxIcon />
            <TextField
              variant="standard"
              label="Trust Name"
              type="text"
              onChange={(event) => {
                setTrustName(event.target.value);
              }}
            />
          </div>
          <div className="input-field food">
            <PhoneAndroidIcon />
            <TextField
              variant="standard"
              label="Phone Number"
              type="number"
              onChange={(event) => {
                setNmbr(event.target.value);
              }}
            />
          </div>
          <div className="input-field food">
            <FoodBankIcon />
            <TextField
              variant="standard"
              label="Category Name"
              type="text"
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            />
          </div>
          <div className="input-field food">
            <FastfoodIcon />
            <TextField
              variant="standard"
              label="Food Type"
              type="text"
              onChange={(event) => {
                setMealType(event.target.value);
              }}
            />
          </div>
          <div className="input-field food">
            <PeopleIcon />
            <TextField
              variant="standard"
              label="Number of People"
              type="number"
              onChange={(event) => {
                setCount(event.target.value);
              }}
            />
          </div>
          <div className="input-field food">
            <DescriptionIcon />
            <TextField
              variant="standard"
              label="About the Event"
              type="text"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
          <div className="input-field-btn">
            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={cancel}>Cancel</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default FoodRequest;
