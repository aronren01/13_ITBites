import React from 'react';
import { MENU } from '@/public/assets/constant';
import Image from 'next/image';

const MenusPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {MENU.map((menu, index) => (
            <div key={index} className='flex flex-col py-0 border-1 border-[#d3773b] border-opacity-50 rounded-[20px] shadow-2xl'>
                <Image src={menu.image} alt={menu.menuname} className=' w-[300px] h-[300px] cover rounded-t-[20px]'/>
                <div className='bg-gradient-to-t from-[#fe9b5b] to-[#fe6601] w-[300px] h-[150px] rounded-b-[20px] font-gilroy'  > 
                    <h3 className='flex items-start justify-start text-4xl font-extrabold text-white pt-8 pl-8'>{menu.menuname}</h3>
                    <p className='text-white flex justify-start items-start pl-8 text-2xl font-bold pt-2'>{menu.price}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default MenusPage;