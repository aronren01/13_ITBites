"use client"; // Tambahkan ini di bagian paling atas

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropDown4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative select-none" id="DropDownButton">
      <div
        onClick={ToggleDropdown}
        className="border-[2px] border-solid border-[#ffb888] bg-white border-1 px-5 py-2 w-[220px] h-[45px] flex items-center justify-center font-light text-xl rounded-xl cursor-pointer text-[#ff6702]"
      >
        Ketersediaan
      </div>
      <div
        id="DropDown"
        className={`border rounded-xl border-[#ffb888] bg-white p-8 w-[220px] h-[180px] absolute top-[75px] flex items-center flex-col py-[10px] ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="py-1 cursor-pointer hover:bg-[#f1f5f9] w-[180px] flex justify-center rounded-md my-1 text-[#ff6702]">
          Semua
        </div>
        <div className="py-1 cursor-pointer hover:bg-[#f1f5f9] w-[180px] flex justify-center rounded-md my-1 text-[#ff6702]">
          Tersedia
        </div>
        <div className="py-1 cursor-pointer hover:bg-[#f1f5f9] w-[180px] flex justify-center rounded-md my-1 text-[#ff6702]">
          Habis
        </div>
        <div className="py-1 cursor-pointer hover:bg-[#f1f5f9] w-[180px] flex justify-center rounded-md my-1 text-[#ff6702]">
          Kosong Sementara
        </div>
      </div>
    </div>
  );
};

export default DropDown4;
