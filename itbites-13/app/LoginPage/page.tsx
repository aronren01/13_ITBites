import NavBar from '@/components/NavBar'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className="bg-itbites bg-cover min-h-screen w-full">
        <NavBar/>
        <div className='flex items-center justify-center mt-48'>
            <div className='flex flex-col items-center'>
                <div className='font-extrabold font-gilroy text-[80px]'>Apakah Anda Pemilik Kantin?</div>
                <div className='text-[#ff6702] font-extrabold text-[55px] mt-6'>Masuk Sebagai pemilik kantin</div>
                <div className='flex flex-col'>
                    <div className='text-[#ff6702] my-2 font-bold text-xl'>Username</div>
                    <input type='text' placeholder='Masukkan Username' className='border border-[#ff6702] rounded-md w-[450px] h-[50px] placeholder:absolute placeholder:left-3 pl-3 placeholder-[#feb691]'></input>
                    <div className='text-[#ff6702] my-2 font-bold text-xl'>Password</div>
                    <input type='text' placeholder='Masukkan Password' className='border border-[#ff6702] rounded-md w-[450px] h-[50px] placeholder:absolute placeholder:left-3 pl-3 placeholder-[#feb691]'></input>
                </div>
                <Link href="/AdminPage/KantinBarrac1">
                    <button className='bg-[#ff6702] w-[80px] h-[50px] rounded-lg font-bold text-xl text-white my-6'>Login</button>
                    </Link>
            </div>
        </div>
    </div>
  )
}

export default LoginPage