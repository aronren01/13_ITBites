import React from 'react'
import { FaStar } from "react-icons/fa6";


const ReviewComment2 = () => {
  return (
    <div><div className="bg-white shadow-xl w-[72rem] rounded-xl h-24 my-6">
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
  </div></div>
  )
}

export default ReviewComment2