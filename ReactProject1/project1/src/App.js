import "./App.css";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import React, { useState } from "react";

function App() {

  const [userName, setUserName] = useState('')
  const [pwd, setUserPwd] = useState('')

  let postData = {
    username: "adam",
    password: "1234"
  };

  axios.defaults.headers.common["Authorization"] = "Bearer " + (postData ? postData.jwt_token : "");
  axios
    .post("https://akademia108.pl/api/social-app/user/login", postData)
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    });

  localStorage.setItem("Name", userName)
  localStorage.setItem("Password", pwd)


  return (
    <div className="App">
      <div className="Main-nav">
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>


  );
}

export default App;