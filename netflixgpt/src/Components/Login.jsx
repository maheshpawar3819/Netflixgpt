import React from "react";
import Header from "./Header";
import { logoheader } from "../Utils/logoimg";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={logoheader} alt="background" />
      </div>
      <form
        className="bg-black relative p-12 w-3/12 mx-auto top-44 offset rounded-sm bg-opacity-85"
      >
        <p className="text-white text-4xl font-bold mb-4">Login</p>
        <br />

        <input
          type="text"
          placeholder="Enter your e-mail"
          className="p-4 my-5 w-full bg-gray-900 text-white rounded-sm"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="p-4 w-full mb-5 bg-gray-900 text-white rounded-sm"
        />
        <p className="text-red-500 font-bold py-2"></p>
        <button className="bg-red-600 hover:bg-red-800 w-full p-2 rounded-sm font-bold text-white tracking-wide">
          Login 
        </button>
        <p className="text-white my-3 cursor-pointer py-3">
         <Link to={"/register"}> "New to Netflix? Sign up now"</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
