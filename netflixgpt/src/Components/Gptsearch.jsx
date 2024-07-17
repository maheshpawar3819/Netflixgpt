import React from "react";
import Gptsearchbar from "./Gptsearchbar";
import { logoheader } from "../Utils/logoimg";
const Gptsearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={logoheader} alt="background" />
      </div>
      <Gptsearchbar />
    </div>
  );
};

export default Gptsearch;
