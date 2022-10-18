import React, { useState } from "react";

import PersonIcon from "@mui/icons-material/Person";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import WorkIcon from "@mui/icons-material/Work";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import { Avatar, Button, TextField } from "@mui/material";

import "./RegisterDetails.css";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../firebase-config";

import UploadFileIcon from "@mui/icons-material/UploadFile";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function EditProfile() {
  const [name, setName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [occupation, setOccupation] = useState("");
  const [nmbr, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [profileurl, setProfileUrl] = useState("");

  const navigateUser = () => {
    window.location.pathname = "/";
  };

  const handleSubmit = async () => {
    const databaseRef = doc(db, "User_Bio_Data", auth.currentUser.email);
    try {
      const data = await setDoc(databaseRef, {
        Address: address,
        Blood: bloodGroup,
        Email: auth.currentUser.email,
        Name: name,
        Occupation: occupation,
        PhoneNumber: Number(nmbr),
        img: profileurl,
      }).then(navigateUser);
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const [imageUpload, setImageUpload] = useState(null);

  const uploadPhoto = () => {
    if (imageUpload !== null) {
      const imageRef = ref(storage, `userprofile/${auth.currentUser.email}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setProfileUrl(url);
          alert("Image Uploaded");
        });
      });
    }
  };

  return (
    <div className="register-details">
      <div className="register-details-container">
        <div className="header">
          <h1>Submit to Continue</h1>
        </div>
        <div className="input-field-image">
          <Avatar src={profileurl} />
          <Button
            variant="contained"
            component="label"
            endIcon={<UploadFileIcon />}
            onClick={uploadPhoto}
          >
            Upload
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
          </Button>
        </div>
        <div className="input-field">
          <PersonIcon />
          <TextField
            type="text"
            label="Full Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <BloodtypeIcon />
          <TextField
            type="text"
            label="Blood Group"
            onChange={(event) => {
              setBloodGroup(event.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <WorkIcon />
          <TextField
            type="text"
            label="Occupation"
            onChange={(event) => {
              setOccupation(event.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <PhoneAndroidIcon />
          <TextField
            type="number"
            label="Phone Number"
            onChange={(event) => {
              setNumber(event.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <HomeIcon />
          <TextField
            type="text"
            label="Address"
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </div>
        <div className="buttons">
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
