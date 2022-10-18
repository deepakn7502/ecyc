import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import AddRequest from "../Requests/AddRequest";
import AppBar from "../AppBar";
import RequestPopup from "../Requests/RequestPopup";

function Education() {
  const [requests, setRequests] = useState([]);
  const collectionRef = collection(db, "Common_Db");

  useEffect(() => {
    const getRequests = async () => {
      const data = await getDocs(collectionRef);
      setRequests(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(requests);
    };
    getRequests();
  }, []);

  return (
    <div>
      <div>
        <AppBar />
        <AddRequest type="education" />
      </div>
      <div>
        {requests.map((request) => {
          if (request.about === "education") {
            return <RequestPopup request={request} />;
          }
        })}
      </div>
    </div>
  );
}

export default Education;
