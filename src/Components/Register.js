import { Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import React, { useState } from "react";
import { auth } from "../firebase-config";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerRePassword, setRegisterRePassword] = useState("");

  const navigateUser = () => {
    window.location.pathname = "/bio-data";
  };

  const registerUser = async () => {
    if (registerPassword === registerRePassword) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        ).then(navigateUser);
        console.log(user);
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Password Not Matching");
    }
  };

  return (
    <div>
      <div className="register">
        <div className="register-container">
          <div className="header">
            <h1>Register</h1>
          </div>
          <TextField
            type="text"
            label="Enter Email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <TextField
            type="text"
            label="Enter Password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <TextField
            type="text"
            label="Re-Enter Password"
            onChange={(event) => {
              setRegisterRePassword(event.target.value);
            }}
          />
          <div className="buttons">
            <Button
              onClick={() => {
                registerUser();
              }}
            >
              Register
            </Button>
            <Button
              onClick={() => {
                window.location.pathname = "/";
              }}
            >
              Already have an Account?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
