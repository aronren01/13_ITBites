import Image from 'next/image';
import Foto from "../public/assets/itbiteslogowhite.png";
import {  RiAccountCircleFill  } from "react-icons/ri";

const NavBar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between h-24 bg-[#ff6702] fixed-top mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <Image src={Foto} alt="logo" width={150} height={75} className='ml-12' />
          <div className='flex space-x-4'>
            <a href="#" className="text-white font-bold mx-36 text-4xl">
              kantin
            </a>
            <a href="#" className="text-white font-bold text-4xl">
              makanan
            </a>
          </div>
        </div>
        <RiAccountCircleFill className='w-16 h-16 right-0' color='white'/>
      </nav>
    </div>
  );
};

export default NavBar;
