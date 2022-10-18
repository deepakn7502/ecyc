import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import AppBar from "../AppBar";
import RequestPopup from "../Requests/RequestPopup";
import AddRequest from "../Requests/AddRequest";

function Blood() {
  const [requests, setRequests] = useState([]);

  const collectionRef = collection(db, "Common_Db");

  useEffect(() => {
    const getRequests = async () => {
      const data = await getDocs(collectionRef);
      setRequests(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getRequests();
  }, []);

  return (
    <div>
      <div>
        <AppBar />
        <AddRequest type="blood" />
      </div>
      <div>
        {requests.map((request) => {
          if (request.about === "blood") {
            return <RequestPopup request={request} />;
          }
        })}
      </div>
    </div>
  );
}

export default Blood;
