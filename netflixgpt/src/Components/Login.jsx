import React, { useState } from "react";
import Header from "./Header";
import { logoheader } from "../Utils/logoimg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../Utils/authSlice";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //destructure state variables
    const { email, password } = user;
    try {
      const response = await axios.post(
        `http://localhost:8080/api/auth/login`,
        {
          email,
          password,
        }
      );

      if (response.status >= 200) {
        localStorage.setItem("token", response?.data?.token);
        dispatch(login(response?.data?.user));
        alert("user logged in successfull");
        navigate("/");
      }
    } catch (error) {
      console.error("Something wrong");
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={logoheader} alt="background" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-black relative p-12 w-3/12 mx-auto top-44 offset rounded-sm bg-opacity-85"
      >
        <p className="text-white text-4xl font-bold mb-4">Login</p>
        <br />

        <input
          type="text"
          value={user.email}
          name="email"
          placeholder="Enter your e-mail"
          className="p-4 my-5 w-full bg-gray-900 text-white rounded-sm"
          onChange={handleInput}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          name="password"
          className="p-4 w-full mb-5 bg-gray-900 text-white rounded-sm"
          onChange={handleInput}
          required
        />
        <p className="text-red-500 font-bold py-2"></p>
        <button className="bg-red-600 hover:bg-red-800 w-full p-2 rounded-sm font-bold text-white tracking-wide">
          Login
        </button>
        <p className="text-white my-3 cursor-pointer py-3">
          <Link to={"/register"}> New to Netflix? Sign up now </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
