import { Button, Modal, TextField } from "@mui/material";
import React from "react";
import "../Requests/AddRequest.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import IronIcon from "@mui/icons-material/Iron";

function ClothesRequest({ openvalue, cancel }) {
  return (
    <div>
      <Modal open={openvalue} placement="bottom">
        <div className="input-content">
          <div className="header">
            <h1>Submit to Post Request</h1>
          </div>
          <div className="input-field clothes">
            <AccountBoxIcon />
            <TextField variant="standard" label="Full Name" type="text" />
          </div>
          <div className="input-field clothes">
            <IronIcon />
            <TextField variant="standard" label="Type of Dress" type="text" />
          </div>
          <div className="input-field clothes">
            <CheckroomIcon />
            <TextField
              variant="standard"
              label="Number of Dresses"
              type="number"
            />
          </div>
          <div className="input-field clothes">
            <DescriptionIcon />
            <TextField variant="standard" label="Description" type="text" />
          </div>
          <div className="input-field clothes">
            <PhoneAndroidIcon />
            <TextField variant="standard" label="Phone Number" type="number" />
          </div>
          <div className="input-field clothes">
            <HomeIcon />
            <TextField variant="standard" label="Address" type="text" />
          </div>
          <div className="input-field-btn">
            <Button>Submit</Button>
            <Button onClick={cancel}>Cancel</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ClothesRequest;
