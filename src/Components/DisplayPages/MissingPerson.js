import AppBar from "../AppBar";
import React from "react";
import "./MissingPerson.css";
import AddRequest from "../Requests/AddRequest";
import RequestPopup from "../Requests/RequestPopup";


function MissingPerson() {
  return (
    <div className="missing-person">
      <div>
        <AppBar />
        <AddRequest type="missing-person" />
      </div>
      <div>
        <RequestPopup/>
      </div>
    </div>
  );
}

export default MissingPerson;
