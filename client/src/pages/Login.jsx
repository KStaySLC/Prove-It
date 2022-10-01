
import React from "react";
import "../static/login.css";
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";

import { LOGIN_USER } from "../utils/mutations";
import { ADD_USER } from "../utils/mutations";
import { useState } from "react";
import Auth from "../utils/auth";
const styles = { width: "60%" };
const styles2 = { color: "black" };

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (

    <div>
      <div className="parent-div">
        <div className="login">
        {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="log-text">login</div>
            <div className="sign-text">Email:</div>
            <input
              type="text"
              name="email"
              className="username"
              value={formState.email}
              onChange={handleChange}
              style={{ width: "60%" }}
            ></input>
            <div className="sign-text">Password:</div>
            <input
              type="text"
              name="password"
              value={formState.password}
              onChange={handleChange}
              className="password"
              style={{ width: "60%" }}
            ></input>
            <br></br>
            <br></br>
            <button className="sign-text" type="submit" style={styles}>
              Sign In
            </button>
          </form>
           )}

           {error && (
             <div className="my-3 p-3 bg-danger text-white">
               {error.message}
             </div>
           )}
        </div>
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
            <button
              className="sign-text"
              type="button"
              style={{ width: "60%" }}
            >
              Sign Up
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
