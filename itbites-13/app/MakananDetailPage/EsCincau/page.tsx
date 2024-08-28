import NavBar from "@/components/NavBar";
import React from "react";
import Image from "next/image";
import { MENU } from "@/public/assets/constant";
import { FaStar } from "react-icons/fa6";
import MakananComponents from "@/components/MakananComponents";
import FoodCard from "@/components/FoodCard";
import ReviewBar from "@/components/ReviewBar";
import ReviewComment from "@/components/ReviewComment";
import ReviewComment2 from "../../../components/ReviewComment2";

const EsCincauPage = () => {
  const menu = MENU[49];
  return (
    <div className="bg-[#ffecdc] bg-cover">
      <NavBar />
      <div className="mx-28 my-28">
        <div>
          <div className="flex flex-row">
            <div className="w-1/2">
              <div className="bg-[#ffc8ab] w-[150px] h-[55px] flex items-center justify-center border rounded-2xl font-extrabold text-[#ff6702] text-lg shadow-lg">
                {menu.jenis}
              </div>
              <div className="font-gilroy font-extrabold text-[#ff6702] text-7xl my-2">
                {menu.menuname}
              </div>
              <div className="font-gilroy text-2xl my-2 font-bold text-[#ff9c5c] ">
                {menu.location}, {menu.kampus}
              </div>
              <div>
                <p className="font-gilroy text-2xl mr-60 mt-4">
                  {menu.deskripsi}
                </p>
              </div>
            </div>
            <div className="w-1/2 ">
              <div className="flex items-center justify-center">
                <Image
                  src={menu.image}
                  alt={menu.menuname}
                  className=" w-[30rem] h- cover rounded-[20px]"
                ></Image>
              </div>
              <div className="flex justify-center mt-4 text-[#ff6702] text-5xl font-extrabold font-gilroy">
                {menu.price}
              </div>
            </div>
          </div>
          <div>
            <ReviewBar/>
            <div>
              <ReviewComment/>
              <ReviewComment2/>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-20">
          <div className="absolute right-24 text-[#ff6702] font-gilroy text-xl font-bold pt-6">Lihat semua</div>
            <div className="text-5xl text-[#ff6702] font-gilroy font-extrabold">
              Rekomendasi untukmu
            </div>
          </div>
          <div className="flex items-center justify-center mt-24">
            <div className="mx-4 shadow-xl"><FoodCard/></div>
            <div className="mx-4 shadow-xl"><FoodCard/></div>
            <div className="mx-4 shadow-xl "><FoodCard/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsCincauPage;
