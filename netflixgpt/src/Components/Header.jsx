import React from "react";
import { netflixlogo } from "../Utils/logoimg";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptsearchview } from "../Utils/gptslice";
import { Supportedlanguages } from "../Utils/Constants";
import { changeLanguage } from "../Utils/configslice";
import { FaUserCircle } from "react-icons/fa"; // Importing user icon
import { logout } from "../Utils/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const showGptsearch = useSelector((store) => store.gpt.showsearchsearch);
  const getUser = useSelector((store) => store.auth.user);
  const navigate=useNavigate();
  // console.log(getUser);

  const handleGptsearchclick = () => {
    dispatch(toggleGptsearchview());
  };

  const handleLanguagechange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

  const handleLogout = () => {
    // Add logout logic here (e.g., clearing user session, redirecting to login page, etc.)
    console.log("User logged out");
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="absolute flex px-8 py-5 top-0 bottom-0 bg-gradient-to-b from-black w-full z-30 h-20 md:justify-between flex-col md:flex-row">
      <img src={netflixlogo} className="w-32 mx-auto md:mx-0" alt="Netflix Logo" />

      <div className="flex items-center mx-auto md:mx-0 space-x-6">
        {showGptsearch && (
          <select
            className="bg-black hover:bg-gray-700 font-bold p-2 rounded-md text-white cursor-pointer"
            onClick={handleLanguagechange}
          >
            {Supportedlanguages.map((language) => (
              <option value={language.identifier} key={language.identifier}>
                {language.name}
              </option>
            ))}
          </select>
        )}

        <button
          className="bg-slate-600 p-2 rounded-md text-white hover:text-red-400 hover:bg-slate-900"
          onClick={handleGptsearchclick}
        >
          {showGptsearch ? "Homepage" : "Gpt Search"}
        </button>

        {/* User icon with logout dropdown */}
        {getUser && (
          <div className="relative group">
            <FaUserCircle className="text-white text-3xl cursor-pointer hover:text-red-400" />
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg hidden group-hover:block">
              <div className="px-4 py-2 text-white">
                <p className="font-semibold">Hello, {getUser.name}</p>
              </div>
              <div
                className="block px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
