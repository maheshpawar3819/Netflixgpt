import React, { useState } from "react";
import Header from "./Header";
import { logoheader } from "../Utils/logoimg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  //send form to backend for store in the database
  const registerUser = async (e) => {
    e.preventDefault();
    //destructure state variables
    const { name, email, password, confirmpassword } = user;
    try {
      const response = await axios.post(
        `http://localhost:8080/api/auth/register`,
        {
          name,
          email,
          password,
          confirmpassword,
        }
      );
      console.log(response);
      if (response.status >= 200) {
        alert("Successfully Register");
        navigate("/login");
      }
    } catch (error) {
      console.error(`not able to call api`);
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={logoheader} alt="background" />
      </div>
      <form
        className="bg-black relative p-12 w-[30%] mx-auto top-32 offset rounded-sm bg-opacity-85"
        onSubmit={registerUser}
      >
        <p className="text-white text-4xl font-bold mb-4 text-center">
          Register
        </p>
        <br />

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="p-4 w-full  bg-gray-900 text-white rounded-sm"
          value={user.name}
          required
          onChange={handleInput}
        />

        <input
          type="text"
          name="email"
          placeholder="Enter your e-mail"
          className="p-4 my-5 w-full bg-gray-900 text-white rounded-sm"
          value={user.email}
          required
          onChange={handleInput}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-4 w-full mb-5 bg-gray-900 text-white rounded-sm"
          value={user.password}
          required
          onChange={handleInput}
        />
        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm Password"
          className="p-4 w-full mb-5 bg-gray-900 text-white rounded-sm"
          value={user.confirmpassword}
          required
          onChange={handleInput}
        />
        <p className="text-red-500 font-bold py-2"></p>
        <button className="bg-red-600 hover:bg-red-800 w-full p-2 rounded-sm font-bold text-white tracking-wide">
          Register
        </button>
        <p className="text-white my-3 cursor-pointer py-3">
          <Link to={"/login"}>Already Have Account? Login now</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
