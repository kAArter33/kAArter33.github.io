import React, { useState } from "react";
import "./Login.css";
import axios from 'axios';
import { Navigate } from "react-router-dom";

export default function Login() {

  const [user, setUser] = useState(null)

  const [formData, prevFormData] = useState({
    username: "",
    password: ""
  })

  const inputValueChange = e => {
    const target = e.target
    const name = target.name


    prevFormData(prevData => {
      return { ...prevData, [name]: target.value }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    setUser({
      username: 'adam',
      token: "xyz"
    })
  }



  return (
    <div className="login">
      <form className="login-form">
        <input type="text" name="name" placeholder="Login" onChange={inputValueChange} />
        <input type="password" name="password" placeholder="Password" onChange={inputValueChange} />
        <button>Login</button>
      </form>
    </div>
  );
}