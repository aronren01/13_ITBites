"use client";
import Image from 'next/image';
import Foto from "../public/assets/itbiteslogowhite.png";
import {  RiAccountCircleFill  } from "react-icons/ri";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex items-center justify-between h-16 bg-[#ff6702] fixed-top mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <Link href='../'><Image src={Foto} alt="logo" width={130} className='ml-12 left-0' /></Link>
          <div className='flex space-x-4'>
            <Link href="..\KantinPage" className="text-white font-bold mx-8 md:mx-36 text-2xl md:text-3xl">
              Kantin
            </Link>
            <Link href="..\MakananPage" className="text-white font-bold text-2xl md:text-3xl">
              Makanan
            </Link>
          </div>
        </div>
        <div onClick={ToggleDropdown}>
          <RiAccountCircleFill className='w-14 h-14 right-0 cursor-pointer' color='white'/>
          <div id="DropDown"className={`border rounded-xl border-[#ffb888] bg-white p-8 w-[220px] h-[100px] absolute top-[75px] flex items-center flex-col py-[10px] ${isOpen ? "" : "hidden"} right-0`}>
            <div className="py-1 cursor-pointer hover:bg-[#f1f5f9] w-[180px] flex justify-center rounded-md my-1 text-[#ff6702]">
              <Link href="/LoginPage">Login</Link>
            </div>
            <div className="py-1 cursor-pointer hover:bg-[#f1f5f9] w-[180px] flex justify-center rounded-md my-1 text-[#ff6702]">
              <Link href="../">Logout</Link>
            </div> 
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
