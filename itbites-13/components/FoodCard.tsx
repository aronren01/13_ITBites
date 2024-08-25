import React from 'react'
import Image from 'next/image'
import { MENU } from "../public/assets/constant";

//sebelum pake harus instal font terlebih dahulu di global css dan juga di tailwind config, terus harus import gambarnya yang sesuai

const FoodCard = () => {

  const menu = MENU[0];
  return (
<div className='flex flex-col py-0 border border-[#d3773b] border-opacity-50 rounded-[20px] p-0 m-0 h-[450px]'>
        <Image src={menu.image} alt={menu.menuname} className=' w-[300px] h-[300px] cover rounded-t-[20px]'/>
        <div className='bg-gradient-to-t from-[#fe9b5b] to-[#fe6601] w-[300px] h-[150px] rounded-b-[20px] font-gilroy shadow-2xl'  > 
            <h3 className='flex items-start justify-start text-4xl font-extrabold text-white pt-8 pl-8'>{menu.menuname}</h3>
            <p className='text-white flex justify-start items-start pl-8 text-2xl font-bold pt-2'>{menu.price}</p>
        </div>
    </div>
        
  )
}   

export default FoodCard;