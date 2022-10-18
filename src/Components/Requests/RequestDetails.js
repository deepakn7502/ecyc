import { Popper } from "@mui/material";
import React from "react";
import "./RequestDetails.css";

function RequestDetails({ openvalue, cancelpopup, }) {
  return (
    <div className="request-details">
      <Popper open={openvalue} placement="top-start">
        <div className="details-list">
          <div className="req-person">
            <h2>
              Name<span></span>
            </h2>
          </div>
          <div className="detail">
            <div className="details">
              <h2>Name</h2>
              <p></p>
            </div>
            <div className="details">
              <h2>Contact</h2>
              <p></p>
            </div>
            <div className="details">
              <h2>Hospital Name</h2>
              <p>Apollo Hospital, Chennai</p>
            </div>
            <div className="details">
              <h2>Address</h2>
              <p>Chennai</p>
            </div>
            <div className="details">
              <h2>About the Person</h2>
              <p>Nallah dhan irukhan</p>
            </div>
          </div>
          <div className="btns">
            <button onClick={cancelpopup}>Accept</button>
            <button onClick={cancelpopup}>Reject</button>
          </div>
        </div>
      </Popper>
    </div>
  );
}

export default RequestDetails;
