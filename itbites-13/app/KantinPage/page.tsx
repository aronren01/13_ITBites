import React from "react";
import KantinPageComponents from "@/components/KantinPageComponents";
import NavBar from "@/components/NavBar";
import DropDown from "@/components/DropDown";
import DropDown2 from "@/components/DropDown2";


const PageKantin = () => {
  return (
    <div className="bg-[#ffecdc]">
      <NavBar />
      <div className="flex flex-row item px-16 py-14">
        <div className="px-2"><DropDown/></div>
        <div className="px-2"><DropDown2/></div>
      </div>
      <div>
        <KantinPageComponents />
      </div>
    </div>
  );
};

export default PageKantin;
