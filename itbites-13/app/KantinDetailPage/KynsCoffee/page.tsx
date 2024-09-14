import React from "react";
import KantinFoodCard from "@/components/KantinDetailComponents";
import NavBar from "@/components/NavBar";

const KantinDetail = () => {
  return (
    <div className="bg-[#ffecdc]">
      <NavBar />
      <div className="font-gilroy ml-24 pt-10">
        <div className="flex flex-row items-center">
          <div className="font-bold text-[#fe6601] text-[100px] ">Kyns Coffee</div>
          <div className="flex justify-center items-center bg-[#44d438] w-[120px] h-[60px] ml-12 rounded-[20px] text-white text-3xl mt-4">Buka</div>
        </div>
        <div className="font-bold text-[50px] text-[#ff9d5d]">GKU 2</div>
      </div>
      <div>
      <KantinFoodCard startIndex={(8 - 1) * 8} endIndex={8 * 8}/>
      </div>
    </div>
  );
};

export default KantinDetail;
