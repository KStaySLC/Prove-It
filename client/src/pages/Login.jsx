import React from 'react'
import '../static/login.css'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from "../utils/mutations";
import { ADD_USER } from "../utils/mutations"
const styles = {width: '60%' };
const styles2 = { color: 'black' };

function Login() {
  return (
    <div>   
        <div className="parent-div">
            <div className="login">            
                <form>
                    <div className="log-text">login</div>
                    <div className="sign-text">Username:</div>
                    <input type="text" className="username" style= {{width: '60%', color: 'black' }}></input>
                    <div className="sign-text">Password:</div>
                    <input type="text" className="password" style = {{width: '60%' }}></input>
                    <br></br>
                    <br></br>
                    <button className="logBtn" type="button" style={styles}>Sign In</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login