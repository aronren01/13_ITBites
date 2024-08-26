import NavBar from "@/components/NavBar";
import React from "react";
import Image from "next/image";
import { MENU } from "@/public/assets/constant";
import { FaStar } from "react-icons/fa6";
import MakananComponents from "@/components/MakananComponents";
import FoodCard from "@/components/FoodCard";

const BebekHitamPage = () => {
  const menu = MENU[1];
  return (
    <div className="bg-[#ffecdc]">
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
                Bebek Sambal Hitam adalah hidangan khas Indonesia yang menggunakan bebek sebagai bahan utamanya, yang dimasak dengan sambal hitam kental. Sambal ini terbuat dari campuran bawang, cabai, dan rempah lainnya, seringkali termasuk keluak yang memberikan warna hitam dan rasa khas pada sambal.
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
            <div className="my-6">
              <div className="text-5xl text-[#ff6702] font-gilroy font-extrabold">
                Ulasan
              </div>
              <div className="mt-2 flex flex-row">
                <div className="flex flex-row w-1/6">
                  <div className="flex items-center justify-start mx-2 mb-14">
                    <FaStar className="w-8 h-8" color="#ffc700" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-7xl font-gilroy font-extrabold">
                      4.8
                    </div>
                    <div className="text-2xl font-bold">5 ulasan</div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col font-bold text-2xl mr-6 mt-0.5">
                    <div>5</div>
                    <div>4</div>
                    <div>3</div>
                    <div>2</div>
                    <div>1</div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="border bg-white shadow-lg w-[520px] h-[20px] rounded-full my-1.5"></div>
                    <div className="bg-[#ffc700] w-[442px] h-[20px] rounded-full my-1.5 absolute"></div>
                    <div className="border bg-white shadow-lg w-[520px] h-[20px] rounded-full my-1.5"></div>
                    <div className="bg-[#ffc700] w-[76px] h-[20px] rounded-full my-1.5 absolute mt-[38px]"></div>
                    <div className="border bg-white shadow-lg w-[520px] h-[20px] rounded-full my-1.5"></div>
                    <div className="border bg-white shadow-lg w-[520px] h-[20px] rounded-full my-1.5"></div>
                    <div className="border bg-white shadow-lg w-[520px] h-[20px] rounded-full my-1.5"></div>
                  </div>
                  <div className="ml-16 mt-24 pt-[0.875rem] ">
                    <button className="bg-[#ff6702] w-[250px] h-[46px] pr rounded-xl shadow-xl text-white flex items-center justify-center">
                      + Tambahkan Ulasan
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white shadow-xl w-[72rem] rounded-xl h-24 my-6">
                <div className="absolute pl-[14rem] pt-[3.3rem]  text-xl">
                  enak pollll....
                </div>
                <div className="absolute pl-[64rem] pt-2 text-slate-500">
                  4 jam yang lalu
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-center w-48 pt-6 font-extrabold text-2xl">
                    {" "}
                    Aphrodite
                  </div>
                  <div>
                    <div className="flex flex-row ml-[2.2rem]">
                      <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
                      <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
                      <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
                      <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
                      <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-xl w-[72rem] rounded-xl h-24 my-6">
                <div className="absolute pl-[14rem] pt-[3.3rem]  text-xl">
                  Lorem, ipsum dolor sit amet
                </div>
                <div className="absolute pl-[64rem] pt-2 text-slate-500">
                  9 jam yang lalu
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-center w-48 pt-6 font-extrabold text-2xl">
                    {" "}
                    Demeter
                  </div>
                  <div>
                    <div className="flex flex-row ml-[2.2rem]">
                      <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
                      <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
                      <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
                      <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
                      <FaStar className="w-6 h-6 mr-1" color="#ffc700" />
                    </div>
                  </div>
                </div>
              </div>
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

export default BebekHitamPage;
