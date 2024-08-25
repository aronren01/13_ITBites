"use client"; // Tambahkan ini di bagian paling atas

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative select-none" id="DropDownButton">
      <div>
        <div
          onClick={ToggleDropdown}
          className="border-solid border-[2px] border-[#ffb888] bg-white border-1 px-5 py-2 w-[220px] h-[45px] flex items-center justify-center font-bold text-xl rounded-xl cursor-pointer text-[#ff6702]"
        >
          Lokasi
        </div>
      </div>
      <div
        id="DropDown"
        className={`border rounded-xl border-gray-500 bg-white p-8 w-[220px] h-[100px] absolute top-[75px] flex items-center flex-col py-[10px] ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="py-1 cursor-pointer hover:bg-[#f1f5f9] w-[180px] flex justify-center rounded-md my-1 text-[#ff6702]">
          ITB Ganesha
        </div>
        <div className="py-1 cursor-pointer hover:bg-[#f1f5f9] w-[180px] flex justify-center rounded-md my-1 text-[#ff6702]">
          ITB Jatinangor
        </div>
      </div>
    </div>
  );
};

export default DropDown;
