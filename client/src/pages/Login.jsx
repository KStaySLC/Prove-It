import React from 'react'
const styles = {width: '60%' };
const styles2 = { color: 'black' };

function Login() {
  return (
    <div>
        <header>
        <h1 class="header-text">Prove-it!</h1>
    </header>
    <div class="parent-div">
        <div class="login">            
            <form>
           
                <div class="log-text">login</div>
                <div class="sign-text">Username:</div>
                <input type="text" class="username" style= {styles}></input>
                <div class="sign-text">Password:</div>
                <input type="text" class="password" style = {[styles, styles2]}></input>
                <br></br>
                <br></br>
                <button class="sign-text" type="button" style={styles}>Sign In</button>
            </form>
        </div>
        <div class="sign-up">           
            <form>
                <div class="log-text">Sign up</div>
                <div class="sign-text">Username:</div>
                <input type="text" class="username" style = {styles}></input>
                <div class="sign-text">Password:</div>
                <input type="text" class="password" style = {styles}></input>
                <div class="sign-text">Confirm Password:</div>
                <input type="text" class="password" style = {styles}></input>
                <br></br>
                <br></br>
                <button class="sign-text" type="button" style= {styles}>Sign Up</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login