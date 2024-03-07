import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import "../Signin/Signin.css"


function Signin() {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    const handleSignin = (e) => {
        e.preventDefault();
        if(localStorage.getItem(username)!=pass){
            alert("Wrong Username or Password");
            setPass("")
        }
        else{
            navigate('/home')
        }

      };
  return (
    <>
    <Navbar/>
    <div className="main">
      <form onSubmit={handleSignin}>
        <h1>SignIn Form</h1>
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
        <button>Sign In</button>
        
        <div style={{margin:"30px"}}>New User <Link to='/'>Sign Up</Link></div>
      </form>
    </div>
    </>
  )
}
export default Signin
