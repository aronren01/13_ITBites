import React from 'react';
import { KANTIN } from '@/public/assets/constant';
import Image from 'next/image';

const KantinPageComponents = () => {
  return (
    <div className="grid grid-cols-4 gap-10">
        {KANTIN.map((kantin, index) => (
            <div key={index} className='flex items-center flex-col py-0 border-1 border-[#d3773b] border-opacity-50 rounded-[20px]'>
                <Image src={kantin.image} alt={kantin.kantinName} className=' w-[300px] h-[300px] cover rounded-t-[20px]'/>
                <div className='bg-gradient-to-t from-[#fe9b5b] to-[#fe6601] w-[300px] h-[150px] rounded-b-[20px] font-gilroy shadow-xl'> 
                    <h3 className='flex items-start justify-start text-3xl font-extrabold text-white pt-8 pl-6'>{kantin.kantinName}</h3>
                    <p className='text-white flex justify-start items-start pl-6 text-xl font-bold pt-2'>{kantin.location}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default KantinPageComponents;