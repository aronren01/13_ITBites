import NavBar from "@/components/NavBar";
import ReviewBar from "@/components/ReviewBar";
import ReviewComment from "@/components/ReviewComment";
import ReviewComment2 from "@/components/ReviewComment2";
import React from "react";
import { FaRegStar } from "react-icons/fa";

const ReviewPage = () => {
  return (
    <div className="bg-[#ffecdc]">
      <NavBar />
      <div className="flex items-center justify-center my-24">
        <div>
          <ReviewBar />
          <ReviewComment />
          <ReviewComment2 />
          <ReviewComment />
          <ReviewComment2 />
        </div>
      </div>
      <div>
      <div className="flex flex-row ml-[375px] mb-3">
          <FaRegStar className="w-[45px] h-[45px]" />
          <FaRegStar className="w-[45px] h-[45px]" />
          <FaRegStar className="w-[45px] h-[45px]" />
          <FaRegStar className="w-[45px] h-[45px]" />
          <FaRegStar className="w-[45px] h-[45px]" />
        </div>
      </div>
      <div className="flex justify-start items-center flex-col mx-20">
          <input type="text" className="w-[1175px] h-[200px] border border-slate-400 rounded-xl placeholder:top-4 placeholder:left-4 placeholder:absolute flex items-center justify-center" placeholder="Tuliskan Komentarmu"></input>
      </div>
      <div className="flex items-center justify-center mt-5 pb-9">
        <button className="bg-[#ff6702] w-[1175px] h-[70px] rounded-xl text-white font-bold text-xl">
          Kirim
        </button>
      </div>
    </div>
  );
};

export default ReviewPage;
