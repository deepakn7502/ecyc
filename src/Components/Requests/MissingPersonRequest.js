import { Button, Modal, TextField } from "@mui/material";
import React from "react";
import "../Requests/AddRequest.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import HeightIcon from "@mui/icons-material/Height";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";

function MissingPersonRequest({ openvalue, cancel }) {
  return (
    <div className="popper">
      <Modal open={openvalue} placement="left-end">
        <div className="input-content">
          <div className="header">
            <h1>Submit to Post Request</h1>
          </div>
          <div className="input-field missing">
            <AccountBoxIcon />
            <TextField variant="standard" label="Full Name" type="text" />
          </div>
          <div className="input-field missing">
            <PermContactCalendarIcon />
            <TextField variant="standard" label="Age" type="number" />
          </div>
          <div className="input-field missing">
            <HeightIcon />
            <TextField variant="standard" label="Height" type="number" />
          </div>
          <div className="input-field missing">
            <ColorLensIcon />
            <TextField variant="standard" label="Colour" type="text" />
          </div>
          <div className="input-field missing">
            <PersonIcon />
            <TextField variant="standard" label="Identity Mark" type="text" />
          </div>
          <div className="input-field missing">
            <DateRangeIcon />
            <TextField variant="standard"  type="date" />
          </div>
          <div className="input-field missing">
            <MapsHomeWorkIcon />
            <TextField variant="standard" label="Last Seen Area" type="text" />
          </div>
          <div className="input-field missing">
            <DescriptionIcon />
            <TextField variant="standard" label="Description" type="text" />
          </div>
          <div className="input-field missing">
            <HomeIcon />
            <TextField variant="standard" label="Your Address" type="text" />
          </div>
          <div className="input-field missing">
            <PersonIcon />
            <TextField variant="standard" label="Your Name" type="text" />
          </div>
          <div className="input-field missing">
            <PhoneAndroidIcon />
            <TextField variant="standard" label="Your Contact Number" type="number" />
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

export default MissingPersonRequest;
