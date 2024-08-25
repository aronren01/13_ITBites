import React from "react";
import MenusPage from "@/components/MenusPage";
import NavBar from "@/components/NavBar";

const MenuPage = () => {
  return (
    <div className="bg-[#ffecdc]">
      <NavBar />
      <div className="font-gilroy pl-12 pt-10">
        <div className="flex flex-row items-center">
          <div className="font-bold text-[#fe6601] text-[100px] ">Kantin Bagas</div>
          <div className="flex justify-center items-center bg-[#44d438] w-[120px] h-[60px] ml-12 rounded-[20px] text-white text-3xl mt-4">Buka</div>
        </div>
        <div className="font-bold text-[50px] text-[#ff9d5d]">GKU 2</div>
      </div>
      <div>
        <MenusPage />
      </div>
    </div>
  );
};

export default MenuPage;
