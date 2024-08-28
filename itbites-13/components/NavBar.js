import Image from 'next/image';
import Foto from "../public/assets/itbiteslogowhite.png";
import {  RiAccountCircleFill  } from "react-icons/ri";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between h-16 bg-[#ff6702] fixed-top mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wrapper untuk logo dan teks */}
        <div className="flex items-center space-x-4">
          <Link href='../'><Image src={Foto} alt="logo" width={130} className='ml-12' /></Link>
          <div className='flex space-x-4'>
            <Link href="..\KantinPage" className="text-white font-bold mx-36 text-3xl">
              kantin
            </Link>
            <Link href="..\MakananPage" className="text-white font-bold text-3xl">
              makanan
            </Link>
          </div>
        </div>
        <a href='#'><RiAccountCircleFill className='w-14 h-14 right-0' color='white'/></a>
      </nav>
    </div>
  );
};

export default NavBar;
