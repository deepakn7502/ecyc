import React, { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { TextField, Button } from "@mui/material";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <div className="login">
        <div className="login-container">
          <div className="header">
            <h1>Login</h1>
          </div>
          <TextField
            type="text"
            label="Enter Email"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <TextField
            type="text"
            label="Enter Password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <div className="buttons">
            <Button onClick={loginUser}>Login</Button>
            <Button
              onClick={() => {
                window.location.pathname = "/register";
              }}
            >
              Don't Have a account?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
