import React from 'react'
import '../static/login.css'
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
                    <input type="text" className="username" style= {{width: '60%', color: 'red'}}></input>
                    <div className="sign-text">Password:</div>
                    <input type="text" className="password" style = {{width: '60%', color: 'red'}}></input>
                    <br></br>
                    <br></br>
                    <button className="sign-text" type="button" style={styles}>Sign In</button>
                </form>
            </div>
            <div className="sign-up">           
                <form>
                    <div className="log-text">Sign up</div>
                    <div className="sign-text">Username:</div>
                    <input type="text" className="username" style = {{width: '60%', color: 'red'}}></input>
                    <div className="sign-text">Password:</div>
                    <input type="text" className="password" style = {{width: '60%', color: 'red'}}></input>
                    <div className="sign-text">Confirm Password:</div>
                    <input type="text" className="password" style = {{width: '60%', color: 'red'}}></input>
                    <br></br>
                    <br></br>
                    <button className="sign-text" type="button" style= {{width: '60%', color: 'red'}}>Sign Up</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login