import React from 'react';
import './CSS/Home.css';
import './CSS/LoginStu.css';

function Login(){
    return(
      <div className="login">
        <form >
          <h1 className="logh1">Login/Register</h1>
          <input type="email" placeholder="Registered Mail id" className="logmail"/>
          <br />
          <input type="password" placeholder="Password" className="logpass"/>
          <br />
          <button type="submit" className="loglog">Login</button>
          <p className="logfor">Forgot Password?</p>
          <p className="lognew">Are you a new user?</p>
          <button className="logreg">Register Now</button>
        </form>
      </div>
    );
}

function Heading(props){
    return(
        <div className="top">
            <h1 className="intern">{props.name1}</h1>
            <h1 className="portal">{props.name2}</h1>
        </div>
    );
}

function Body(){
    return(
        <div className="stubody">
            <img src="./stulog.png" alt="Student" className="stuimage" height="auto" width="500px" />
        </div>
    );
}
export default Login;
export {Heading,Body};