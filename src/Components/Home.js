import React from "react";
import AppBar from "./AppBar";
import "./Home.css";
import RequestDetails from "./Requests/RequestDetails";
import RequestPopup from "./Requests/RequestPopup";
function Home({ signoutUser }) {
  return (
    <div className="home">
      <AppBar signoutUser={signoutUser} logout={true} />
      <div className="main-content">
        <RequestPopup />
        <RequestDetails />
      </div>
    </div>
  );
}

export default Home;
