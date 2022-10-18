import { Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import "../Requests/AddRequest.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import BedIcon from "@mui/icons-material/Bed";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

function BloodRequest({ openvalue, cancel }) {
  const [name, setName] = useState("");
  const [bloodgroup, setBloodGroup] = useState("");
  const [nmbr, setNmbr] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const time = serverTimestamp();

  const handleSubmit = async () => {
    const databaseRef = collection(db, "Common_Db");
    try {
      const Ref = await addDoc(databaseRef, {
        Address: address,
        Blood_Group: bloodgroup,
        Name: name,
        PhoneNumber: Number(nmbr),
        Time: time,
        about: "blood",
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
      <Modal open={openvalue} placement="bottom" onClose={() => {}}>
        <div className="input-content">
          <div className="header">
            <h1>Submit to Post Request</h1>
          </div>
          <div className="input-field blood">
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
          <div className="input-field blood">
            <BloodtypeIcon />
            <TextField
              variant="standard"
              label="Blood Group"
              type="text"
              onChange={(event) => {
                setBloodGroup(event.target.value);
              }}
            />
          </div>
          <div className="input-field blood">
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
          <div className="input-field blood">
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
          <div className="input-field blood">
            <BedIcon />
            <TextField
              variant="standard"
              label="About Patient"
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

export default BloodRequest;
