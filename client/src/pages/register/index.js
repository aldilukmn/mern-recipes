import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:4000/auth/register", {username, password});
        alert("Registration completed! Now login.");
        navigate('/login');
    } catch (err) {
        console.log("Err : ", err);
    }
  };

  return (
    <div className="container h-100">
      <div className="row h-75 justify-content-center align-items-center">
        <div className="col-10 col-sm-8 col-md-6 col-xl-4 m-auto">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center">Register</h3>
              <input type="text" className="form-control my-3 py-2" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} />
              <input type="password" className="form-control my-3 py-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
              <button className="btn btn-primary w-100" onClick={onSubmit}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
