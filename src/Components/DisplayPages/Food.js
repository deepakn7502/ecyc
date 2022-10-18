import React from "react";
import AddRequest from "../Requests/AddRequest";
import AppBar from "../AppBar";

function Food() {
  return (
    <div>
      <div>
        <AppBar />
        <AddRequest type="food" />
      </div>
      <div>
      </div>
    </div>
  );
}

export default Food;
