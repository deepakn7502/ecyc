import React from "react";
import AddRequest from "../Requests/AddRequest";
import AppBar from "../AppBar";

function Health() {
  return (
    <div>
      <div>
        <AppBar />
        <AddRequest type="health" />
      </div>
      <div>
      </div>
    </div>
  );
}

export default Health;
