import NavBar from '@/components/NavBar'
import React from 'react'
import SearchBar from '@/components/SearchBar';
import DropDown3 from '@/components/DropDown3';
import MakananComponents from '@/components/MakananComponents';

const MakananPage = () => {
    return (
        <div className="bg-[#ffecdc]">
          <NavBar />
          <div className="ml-20 mt-12">
            <SearchBar></SearchBar>
          </div>
          <div className="flex flex-row item ml-20 pt-6 pb-14">
            <div><DropDown3/></div>
          </div>
          <div className='ml-6'>
            <MakananComponents />
          </div>
        </div>
      );
    };
    
export default MakananPage