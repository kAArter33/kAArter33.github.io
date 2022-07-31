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
      return {
        ...prevData, [name]: target.value

      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    setUser({
      username: 'adam',
      token: "xyz"
    })
  }

  const checkUser = () => {

    let loginData = {
      username: formData.username,
      password: formData.password
    };

    axios
      .post("https://akademia108.pl/api/social-app/user/login", loginData)
      .then((res) => {
        console.log("response",res.data);
      })
      .catch((err) => {
        console.log('error', err.data);

      });

  }


  return (
    <div className="login">
      <form className="login-form">
        <input type="text" name="username" placeholder="Login" onChange={inputValueChange} />
        <input type="password" name="password" placeholder="Password" onChange={inputValueChange} />
        <button onClick={checkUser}>Login</button>
      </form>
    </div>
  );
}