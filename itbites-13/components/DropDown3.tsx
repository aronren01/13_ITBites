"use client"; // Tambahkan ini di bagian paling atas

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


const DropDown3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative select-none" id="DropDownButton">
      <div
        onClick={ToggleDropdown}
        className="border-[2px] border-solid border-[#ffb888] bg-white border-1 px-5 py-2 w-[220px] h-[45px] flex items-center justify-center font-bold text-xl rounded-xl cursor-pointer text-[#ff6702]"
      >
        Pilih Kategori
      </div>
      <div
        id="DropDown"
        className={`border rounded-xl border-[#ffb888] bg-white p-8 w-[220px] h-[180px] absolute top-[75px] flex items-center flex-col py-[10px] ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="py-1 cursor-pointer hover:bg-[#f1f5f9] w-[180px] flex justify-center rounded-md my-1 text-[#ff6702]">
          Makan Berat
        </div>
        <div className="py-1 cursor-pointer hover:bg-[#f1f5f9] w-[180px] flex justify-center rounded-md my-1 text-[#ff6702]">
          Camilan
        </div>
        <div className="py-1 cursor-pointer hover:bg-[#f1f5f9] w-[180px] flex justify-center rounded-md my-1 text-[#ff6702]">
          Makanan Penutup
        </div>
        <div className="py-1 cursor-pointer hover:bg-[#f1f5f9] w-[180px] flex justify-center rounded-md my-1 text-[#ff6702]">
          Minuman
        </div>
      </div>
    </div>
  );
};

export default DropDown3;
