import { Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import "../Requests/AddRequest.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";

function EducationRequest({ openvalue, cancel }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [educationtype, setEducationType] = useState("");
  const [institution, setInstitution] = useState("");
  const [nmbr, setNmbr] = useState("");
  const [description, setDescription] = useState("");
  const time = serverTimestamp();

  const handleSubmit = async () => {
    const databaseRef = collection(db, "Common_Db");
    try {
      const Ref = await addDoc(databaseRef, {
        Address: address,
        Education_List: educationtype,
        Institution_name: institution,
        Name: name,
        PhoneNumber: Number(nmbr),
        Time: time,
        about: "education",
        Description: description,
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
          <div className="input-field education">
            <AccountBoxIcon />
            <TextField
              variant="standard"
              label="Full Name"
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="input-field education">
            <SchoolIcon />
            <TextField
              variant="standard"
              label="Institution Name"
              type="text"
              onChange={(event) => {
                setInstitution(event.target.value);
              }}
            />
          </div>
          <div className="input-field education">
            <MenuBookIcon />
            <TextField
              variant="standard"
              label="Education Type"
              type="text"
              onChange={(event) => {
                setEducationType(event.target.value);
              }}
            />
          </div>
          <div className="input-field education">
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
          <div className="input-field education">
            <HomeIcon />
            <TextField
              variant="standard"
              label="Address"
              type="text"
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </div>
          <div className="input-field education">
            <PersonIcon />
            <TextField
              variant="standard"
              label="Description"
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

export default EducationRequest;
