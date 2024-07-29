import React from 'react';
import './Login.css';
import {Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='login'>
      <Link to="/">Home</Link>
       <form required autocomplete="on">
      </form>
      <label htmlFor="username">
        <h4 > USERNAME</h4>
        <br></br>
      </label>
      <input className="box1" type="text" name="username" id="username" placeholder="Enter Username" required />

      <label htmlFor="password">
        <h4><i className="fa-sharp fa-solid fa-lock"></i> PASSWORD</h4>
      </label><br></br>
      <input className="box1" type="password" name="password" id="password" placeholder="Enter Password" required />
<br></br>
      <button type="button" className="btn-hover color-8">
       
          <font color="white">LOGIN</font>
       
      </button>

      <br />
      <div className="checkbox-container">
          <input type="checkbox" name="rememberMe" id="rememberMe" value="Remember me" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
      <p>
        <h6>Forgot password</h6>
      </p>

      <p>
        <h6>Don't have an account? SIGN UP</h6>
      </p>
    </div>
  );
}

export default Login;
