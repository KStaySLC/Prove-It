import React from "react";
import { useMutation } from '@apollo/client'
import { ADD_USER } from "../utils/mutations"
import '../static/login.css'

function Signup() {
  return (
    <div className="parent-div" >
      <div className="sign-up">
        <form>
          <div className="log-text">Sign up</div>
          <div className="sign-text">Username:</div>
          <input
            type="text"
            className="username"
            style={{ width: "60%" }}
          ></input>
          <div className="sign-text">Password:</div>
          <input
            type="text"
            className="password"
            style={{ width: "60%" }}
          ></input>
          <div className="sign-text">Confirm Password:</div>
          <input
            type="text"
            className="password"
            style={{ width: "60%" }}
          ></input>
          <br></br>
          <br></br>
          <button className="logBtn" type="button" style={{ width: "60%" }}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
