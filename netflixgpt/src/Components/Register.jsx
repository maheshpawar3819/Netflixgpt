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
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();
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
        alert("Successfully Registered");
        navigate("/");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        alert("Faild to login");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <Header />
      <div className="absolute inset-0">
        <img
          src={logoheader}
          alt="background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <form
        className="relative bg-black p-8 sm:p-12 w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto top-0 md:top-20 rounded-md bg-opacity-90 shadow-lg"
        onSubmit={registerUser}
      >
        <p className="text-white text-3xl sm:text-4xl font-bold mb-6 text-center">
          Register
        </p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="p-4 w-full mb-4 bg-gray-800 text-white rounded-md"
          value={user.name}
          required
          onChange={handleInput}
        />

        <input
          type="text"
          name="email"
          placeholder="Enter your e-mail"
          className="p-4 w-full mb-4 bg-gray-800 text-white rounded-md"
          value={user.email}
          required
          onChange={handleInput}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-4 w-full mb-4 bg-gray-800 text-white rounded-md"
          value={user.password}
          required
          onChange={handleInput}
        />

        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm Password"
          className="p-4 w-full mb-5 bg-gray-800 text-white rounded-md"
          value={user.confirmpassword}
          required
          onChange={handleInput}
        />

        <button className="bg-red-600 hover:bg-red-800 w-full p-3 sm:p-4 rounded-md font-bold text-white tracking-wide transition duration-300">
          Register
        </button>
        <p className="text-white text-center mt-4 cursor-pointer">
          <Link to={"/"} className="hover:underline">
            Already Have an Account? Login now
          </Link>
        </p>
        <p className="text-red-600 text-center mt-2">{error}</p>
      </form>
    </div>
  );
};

export default Register;
