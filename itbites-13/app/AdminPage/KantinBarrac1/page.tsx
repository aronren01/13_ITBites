import DropDown4 from "@/components/DropDown4";
import FoodCardAdmin from "@/components/FoodCardAdmin";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import React from "react";

const AdKantinBarrac1 = () => {
  return (
    <div className="bg-[#ffecdc]">
      <NavBar />
      <div className="font-gilroy ml-24 pt-10">
        <div className="flex flex-row items-center">
          <div className="font-bold text-[#fe6601] text-[100px] ">
            Kantin Barrac 1
          </div>
          <div className="flex justify-center items-center bg-[#44d438] w-[120px] h-[60px] ml-12 rounded-[20px] text-white text-3xl mt-4">
            Buka
          </div>
          <div className="flex items-center ml-8 mt-8">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer"></input>
              <div className="w-24 h-10 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[55px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[34px] after:w-[34px] after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
            </label>
          </div>
          <div className="font-bold text-2xl text-[#ff6702] mt-12 ml-10">
            ubah
          </div>
        </div>
        <div className="font-bold text-[50px] text-[#ff9d5d]">East Corner</div>
        <div className="mt-10">
          <DropDown4 />
        </div>
        <div className="mt-10 pb-16">
          <FoodCardAdmin startIndex={(2 - 1) * 8} endIndex={2 * 8} />
        </div>
      </div>
      <div className="flex items-end justify-end mr-[120px] pb-10 ">
        <Link href="/AdminNewMenu">
        <button className="bg-[#ff6702] rounded-full w-[280px] h-[75px] font-extrabold text-2xl text-white pb">
          + Tambahkan Menu
        </button>
        </Link>
      </div>
    </div>
  );
};

export default AdKantinBarrac1;
