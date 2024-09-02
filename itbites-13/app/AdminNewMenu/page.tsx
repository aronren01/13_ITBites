import NavBar from "@/components/NavBar";
import React from "react";
import Image from "next/image";
import { MENU } from "@/public/assets/constant";
import foto from "@/public/assets/Checker.png"
import DropDown3 from "@/components/DropDown3";

const AdminNewMenu = () => {
  const menu = MENU[8];
  return (
    <div className="bg-[#ffecdc]">
      <NavBar />
      <div className="flex justify-center items-center mt-16 pb-16">
        <div>
          <Image
            src={foto}
            alt="Gado Gado"
            className="border rounded-xl shadow-xl w-[720px] h-[410px]"
          ></Image>
        </div>
      </div>
      <div className="ml-24">
        <div className="font-extrabold text-3xl text-[#ff6702]">Nama item</div>
        <input className="bg-white border border-slate-300 rounded-lg w-[650px] h-[45px] mt-2 p-2 placeholder:{">
        </input>
        <div className="font-extrabold text-3xl text-[#ff6702] pt-4">
          Deskripsi
        </div>
        <input className="bg-white border border-slate-300 rounded-lg w-[650px] h-[140px] mt-2 p-2">
        </input>
        <div className="font-extrabold text-3xl text-[#ff6702] pt-4">Harga</div>
        <input className="bg-white border border-slate-300 rounded-lg w-[340px] h-[45px] mt-2 p-2">
        </input>
        <div className="font-extrabold text-3xl text-[#ff6702] pt-4">
          Kategori
        </div>
        <div className="pt-4">
        <DropDown3/>
        </div>
      </div>
      <div className="flex justify-end items-end mr-24 pb-[180px]">
        <button className="bg-[#ff6702] rounded-full text-white font-bold text-xl w-[150px] h-[60px]">
          Simpan
        </button>
      </div>
    </div>
  );
};

export default AdminNewMenu;
