import React from "react";
import { MENU } from "@/public/assets/constant";
import Image from "next/image";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import { RiEditCircleFill } from "react-icons/ri";
import DropDown5 from "./DropDown5";

interface Props {
  startIndex: number;
  endIndex: number;
}

const FoodCardAdmin: React.FC<Props> = ({ startIndex, endIndex }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {MENU.slice(startIndex, endIndex).map((menu, index) => (
        <div
          key={index}
          className="flex flex-col py-0 border-1 border-[#d3773b] border-opacity-50 rounded-[20px]"
        >
          <div>
            <div className="absolute border-4 rounded-full border-[#da2c2c] bg-white ml-[260px] w-[40px] h-[40px]">
              <FaTrash className="m-2" color="#da2c2c" />
            </div>
            <Image
              src={menu.image}
              alt={menu.menuname}
              className=" w-[300px] h-[300px] cover rounded-t-[20px]"
            />
          </div>
          <div className="bg-gradient-to-t from-[#fe9b5b] to-[#fe6601] w-[300px] h-[150px] rounded-b-[20px] font-gilroy shadow-2xl">
            <h3 className="flex items-start justify-start text-2xl font-extrabold text-white pt-4 pl-[18px]">
              {menu.menuname}
            </h3>
            <div className="ml-4 mt-2">
              <DropDown5 />
            </div>
            <p className="text-white flex justify-start items-start pl-[18px] text-xl font-bold pt-2">
              {menu.price}
            </p>
          </div>
          <div className="absolute mt-[390px] ml-[240px]">
            <Link href={menu.edit}>
              <RiEditCircleFill className="w-[60px] h-[60px]" color="white" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCardAdmin;
