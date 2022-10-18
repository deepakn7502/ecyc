import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blood from "./Components/DisplayPages/Blood";
import Home from "./Components/Home";
import Education from "./Components/DisplayPages/Education";
import Login from "./Components/Login";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import Register from "./Components/Register";
import RegisterDetails from "./Components/RegisterDetails";
import EditProfile from "./Components/EditProfile";
import Health from "./Components/DisplayPages/Health";
import Food from "./Components/DisplayPages/Food";
import Clothes from "./Components/DisplayPages/Clothes";
import MissingPerson from "./Components/DisplayPages/MissingPerson";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

  const signoutUser = async () => {
    await signOut(auth);
  };

  return (
    <Router>
      <div className="App">
        {user ? (
          <Routes>
            <Route path="/" element={<Home signoutUser={signoutUser} />} />
            <Route path="/blood" element={<Blood />} />
            <Route path="/health" element={<Health />} />
            <Route path="/education" element={<Education />} />
            <Route path="/food" element={<Food />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/missing_person" element={<MissingPerson />} />
            <Route path="/register" element={<Register />} />
            <Route path="/bio-data" element={<RegisterDetails />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/bio-data" element={<RegisterDetails />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
