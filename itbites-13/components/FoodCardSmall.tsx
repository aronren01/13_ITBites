import React from 'react'
import Image from 'next/image'
import { MENU } from "../public/assets/constant";

//sebelum pake harus instal font terlebih dahulu di global css dan juga di tailwind config, terus harus import gambarnya yang sesuai

const FoodCardSmall = () => {

  const menu = MENU[0];
  return (
<div className='flex flex-col py-0 border border-[#d3773b] border-opacity-50 rounded-[20px] shadow-2xl p-0 m-0 h-[330px]'>
        <Image src={menu.image} alt={menu.menuname} className=' w-[200px] h-[200px] cover rounded-t-[20px]'/>
        <div className='bg-gradient-to-t from-[#fe9b5b] to-[#fe6601] w-[200px] h-[130px] rounded-b-[20px] font-gilroy'  > 
            <h3 className='flex items-start justify-start text-2xl font-extrabold text-white pt-8 pl-8'>{menu.menuname}</h3>
            <p className='text-white flex justify-start items-start pl-8 text-2xl font-bold pt-2'>{menu.price}</p>
        </div>
    </div>
        
  )
}   

export default FoodCardSmall;