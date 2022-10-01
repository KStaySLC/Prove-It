import React, {useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client'
import { ADD_USER } from "../utils/mutations"
import '../static/login.css'
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="parent-div" >
      <div className="sign-up">
      {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
        <form onSubmit={handleFormSubmit}>
          <div className="log-text">Sign up</div>
          <div className="sign-text">Username:</div>
          <input
            type="text"
            name="username"
            className="username"
            style={{ width: "60%" }}
            value={formState.username}
            onChange={handleChange}
          ></input>
          <div className="sign-text">Email:</div>
          <input
            type="text"
            name="email"
            className="password"
            style={{ width: "60%" }}
            value={formState.email}
            onChange={handleChange}
          ></input>
          <div className="sign-text">Password:</div>
          <input
            type="text"
            name="password"
            className="password"
            style={{ width: "60%" }}
            value={formState.password}
            onChange={handleChange}
          ></input>
          <br></br>
          <br></br>
          <button className="logBtn" type="submit" style={{ width: "60%" }}>
            Sign Up
          </button>
        </form>
         )}

         {error && (
           <div className="my-3 p-3 bg-danger text-white">
             {error.message}
           </div>
         )}
      </div>
    </div>
  );
}

export default Signup;
