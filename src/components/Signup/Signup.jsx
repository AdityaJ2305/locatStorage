import React from "react";
import "../Signup/Signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const Navigate = useNavigate();

  const handleClicker = (e) => {
    e.preventDefault();
    if(!localStorage.getItem(username)){
      alert("Welcome to Home page")
        localStorage.setItem(username,pass);
        Navigate('/home')
    }
    else{
        alert("Already a user Redirecting to Sign in")
        Navigate('/signin')
    }
    setUsername("");
    setPass("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="main">
      <form onSubmit={handleClicker}>
        <h1>SignUp Form</h1>
        <label>Username:</label>
        <input
          type="text"
          required
          placeholder="Enter the name"
          className="inp"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          required
          placeholder="Enter the password"
          className="inp"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <label>Mobile Number:</label>
        <input
          type="number"
          required
          placeholder="Enter the phone number"
          className="inp"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <label>Email id:</label>
        <input
          type="email"
          required
          placeholder="Enter the email id"
          className="inp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button>Sign UP</button>
        <div style={{margin:"30px"}}>Already User <Link to='/signin'>Sign in</Link></div>
      </form>
    </div>
  );
}

export default Signup;
