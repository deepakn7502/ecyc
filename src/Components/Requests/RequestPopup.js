import React, { useState } from "react";
import "./RequestPopup.css";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import RequestDetails from "./RequestDetails";

function RequestPopup() {
  const [open, setOpen] = useState(false);
  const handleMoreInfo = () => {
    setOpen(true);
  };
  const handlePopupCancel = () => {
    setOpen(false);
  };
  return (
    <div className="requestpopup">
      <div className="popup">
        <div className="popup-header">
          <div className="popup-header-icon">
            <DeviceUnknownIcon />
          </div>
          <h2>
            Name:<span></span>
          </h2>
          <h2>
            Request:<span></span>
          </h2>
        </div>
        <div className="popup-btns">
          <div className="accept-reject">
            <button>Accept</button>
            <button>Reject</button>
          </div>
          <div className="more-info" onClick={handleMoreInfo}>
            <DoubleArrowIcon />
          </div>
        </div>
        <RequestDetails
          openvalue={open}
          cancelpopup={handlePopupCancel}
        />
      </div>
    </div>
  );
}

export default RequestPopup;
