import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:4000/auth/login", {username, password});
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.userID);
        navigate('/');
    } catch (err)  {
        console.log("Err", err);
    }
  };

  return (
    <div className="container h-100">
      <div className="row h-75 justify-content-center align-items-center">
        <div className="col-10 col-sm-8 col-md-6 col-xl-4 m-auto">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center">Login</h3>
              <input type="text" name="" id="" className="form-control my-3 py-2" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
              <input type="password" name="" id="" className="form-control my-3 py-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
              <button className="btn btn-primary w-100" onClick={onSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
