import { Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import "../Requests/AddRequest.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import DescriptionIcon from "@mui/icons-material/Description";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

function HealthRequest({ openvalue, cancel }) {
  const [name, setName] = useState("");
  const [hospital, setHospital] = useState("");
  const [nmbr, setNmbr] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const time = serverTimestamp();

  const handleSubmit = async () => {
    const databaseRef = collection(db, "Common_Db");
    try {
      const Ref = await addDoc(databaseRef, {
        Address: address,
        Hospital_Name: hospital,
        Name: name,
        PhoneNumber: Number(nmbr),
        Time: time,
        about: "health",
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
          <div className="input-field health">
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
          <div className="input-field health">
            <LocalHospitalIcon />
            <TextField
              variant="standard"
              label="Hospital Name"
              type="text"
              onChange={(event) => {
                setHospital(event.target.value);
              }}
            />
          </div>
          <div className="input-field health">
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
          <div className="input-field health">
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
          <div className="input-field health">
            <DescriptionIcon />
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

export default HealthRequest;
