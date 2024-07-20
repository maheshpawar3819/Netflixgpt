import React from "react";
import Gptsearchbar from "./Gptsearchbar";
import { logoheader } from "../Utils/logoimg";
const Gptsearch = () => {
  return (
    <>
      <div className="">
        <div className="absolute -z-10">
          <img
            className="h-screen object-cover md:h-auto"
            src={logoheader}
            alt="background"
          />
        </div>
        <div className="">
          <Gptsearchbar />
        </div>
      </div>
    </>
  );
};

export default Gptsearch;
