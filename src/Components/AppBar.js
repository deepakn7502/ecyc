import { IconButton } from "@mui/material";
import React from "react";
import "./AppBar.css";
import Sidebar from "./Sidebar";
import LogoutIcon from "@mui/icons-material/Logout";

function AppBar({ signoutUser, logout }) {
  return (
    <div className="appbar">
      <div className="navigator">
        <Sidebar />
      </div>
      <div className="name">ECYC</div>
      <div className="logout-btn">
        {logout ? (
          <IconButton onClick={signoutUser}>
            <LogoutIcon />
          </IconButton>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default AppBar;
