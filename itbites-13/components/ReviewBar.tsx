import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";

const ReviewBar = () => {
  return (
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
              <div className="text-7xl font-gilroy font-extrabold">4.8</div>
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
              <Link href="/ReviewPage">
                <button className="bg-[#ff6702] w-[250px] h-[46px] pr rounded-xl shadow-xl text-white flex items-center justify-center">
                  + Tambahkan Ulasan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBar;
