import React from "react";
import {GridLoader} from "react-spinners"
const Loader = () => {
  return (
  <div className="flex flex-col h-full items-center justify-center ">
    <GridLoader color="#d63636" size="30" />
    <h1 className="mt-2 text-[#163020] font-bold">IvicamAi is Thinking</h1>
  </div>);
};

export default Loader;
