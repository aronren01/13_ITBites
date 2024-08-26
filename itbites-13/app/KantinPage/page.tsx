import React from "react";
import KantinPageComponents from "@/components/KantinPageComponents";
import NavBar from "@/components/NavBar";
import DropDown from "@/components/DropDown";
import DropDown2 from "@/components/DropDown2";
import SearchBar from "@/components/SearchBar";


const PageKantin = () => {
  return (
    <div className="bg-[#ffecdc]">
      <NavBar />
      <div className="ml-20 mt-12">
        <SearchBar></SearchBar>
      </div>
      <div className="flex flex-row item ml-20 pt-6 pb-14">
        <div className="mr-4"><DropDown/></div>
        <div><DropDown2/></div>
      </div>
      <div>
        <KantinPageComponents />
      </div>
    </div>
  );
};

export default PageKantin;
