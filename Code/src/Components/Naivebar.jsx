import React from "react";
import img from "../assets/logo.png";
import img2 from "../assets/R.png"
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <>
      <header className="h-16 w-full border-2 border-solid border-red-600 bg-cyan-300 flex items-center justify-between px-4 m-none">
        <div className="flex items-center">
          <img src={img} alt="Company Logo" className="h-12 w-12" />
        </div>
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="Search here"
            className="p-2 w-96 outline-none rounded-md  border-b-2 border-t-2 border-solid border-black"
          />
          <button className="p-2 bg-white w-10 ml-1  rounded-md hover:bg-green-700  border-b-2 border-solid border-red-600">
            <CiSearch size={24} />
          </button>
        </div>
        <div className=" h-12 w-12 rounded-full"><img src={img2} alt="profile" /></div>
      </header>
    </>
  );
}

export default Navbar;
