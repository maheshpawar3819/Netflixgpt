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
  const [error,setError]=useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    try {
      const response = await axios.post(
        `http://localhost:8080/api/auth/login`,
        {
          email,
          password,
        }
      );

      console.log(response);
      if (response.status >= 200) {
        localStorage.setItem("token", response?.data?.token);
        dispatch(login(response?.data?.user));
        alert("User logged in successfully");
        navigate("/browser");
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
        onSubmit={handleSubmit}
        className="relative bg-black p-8 sm:p-12 w-11/12 md:w-8/12 lg:w-5/12 xl:w-3/12 mx-auto top-0 md:top-20 rounded-md bg-opacity-90 shadow-lg"
      >
        <p className="text-white text-3xl sm:text-4xl font-bold mb-6 text-center">Login</p>
        <input
          type="text"
          value={user.email}
          name="email"
          placeholder="Enter your e-mail"
          className="p-4 my-3 sm:my-5 w-full bg-gray-800 text-white rounded-md"
          onChange={handleInput}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          name="password"
          className="p-4 mb-4 sm:mb-5 w-full bg-gray-800 text-white rounded-md"
          onChange={handleInput}
          required
        />
        <button className="bg-red-600 hover:bg-red-800 w-full p-3 sm:p-4 rounded-md font-bold text-white tracking-wide transition duration-300">
          Login
        </button>
        <p className="text-white text-center my-3">
          <Link to={"/register"} className="hover:underline">
            New to Netflix? Sign up now
          </Link>
        </p>
        <p className="text-red-600 text-center mt-2">{error}</p>
      </form>
    </div>
  );
};

export default Login;
