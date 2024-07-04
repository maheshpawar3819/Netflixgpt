import React from "react";
import Header from "./Header";
import { logoheader } from "../Utils/logoimg";
import { useState, useRef } from "react";
import { checkvalidation } from "../Utils/validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";
const Login = () => {
  const [signinform, setSigninform] = useState(true);
  const [errormsg, setErrormsg] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  //   const name = useRef(null);

  const checkfilds = () => {
    //validate the form
    const msg = checkvalidation(
      email.current.value,
      password.current.value
      //   name.current.value
    );
    setErrormsg(msg);
    console.log(msg);
    if (msg) return; //if the user id and password was not valid dont go forword
    //other wise go forword
    //sign in sign up logic

    if (!signinform) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormsg(errorCode + "-" + errorMessage);
        });
    } else {
    }
  };

  const istoggle = () => {
    setSigninform(!signinform);
  };

  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src={logoheader} alt="background" />
      </div>
      <form
        className="bg-black relative p-12 w-3/12 mx-auto top-44 offset rounded-sm bg-opacity-85"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p className="text-white text-4xl font-bold mb-4">
          {signinform ? "Login" : "Sign Up"}
        </p>
        <br />
        {!signinform ? (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 w-full  bg-gray-900 text-white rounded-sm"
          />
        ) : (
          ""
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter your e-mail"
          className="p-4 my-5 w-full bg-gray-900 text-white rounded-sm"
        />
        <br />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 w-full mb-5 bg-gray-900 text-white rounded-sm"
        />
        <p className="text-red-500 font-bold py-2">{errormsg}</p>
        <button
          className="bg-red-600 hover:bg-red-800 w-full p-2 rounded-sm font-bold text-white tracking-wide"
          onClick={checkfilds}
        >
          {signinform ? "Login" : "Sign UP"}
        </button>
        <p className="text-white my-3 cursor-pointer py-3" onClick={istoggle}>
          {signinform
            ? "New to Netflix? Sign up now"
            : "Already have a account,login"}
        </p>
      </form>
    </div>
  );
};

export default Login;
