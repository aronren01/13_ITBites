import React from 'react'
import { IoMdSearch } from "react-icons/io";


const SearchBar = () => {
  return (
    <form className='w-[457px] h-[52px] relative'>
        <div className="relative">
            <input type='search' placeholder='Cari nama kantin' className='w-full pl-14 p-4 rounded-xl border-[2px] border-[#ffb888] bg-white placeholder-[#feb691]'></input>
            <div className='absolute left-1 top-1/2 -translate-y-1/2 p-4 '>
                <IoMdSearch className='w-6 h-6' color='#feb691'/>
            </div>
        </div>
        <button className='absolute bg-[#ff6001] ml-[480px] rounded-[10px] w-[80px] h-[58px] text-white top-[1px] font-'>Cari</button>
    </form>
  )
}

export default SearchBar