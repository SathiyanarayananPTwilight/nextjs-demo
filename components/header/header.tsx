'useclient'
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import menuIcon from '../../assets/images/menu-05.svg';
import close from '../../assets/images/close.svg';
import backgroundImage from "../../assets/images/backgroundCover1.png"
import Link from 'next/link';

export default function Header() {
  const [isMenu, setIsMenu] = useState(false)
  return (
    <header className="bg-black text-white">
      <nav className="mx-auto py-4 items-center">
        <div className="flex items-center px-5">
          <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="mr-2"
            width={35}
            height={30}
          />
          </Link>
          <p className="px-2 text-[1rem] font-semibold w-full ">{isMenu? "Menu":"Lorem"}</p>
          <div className='flex max-sm:hidden'>
            <Link href="#home"><p className="px-2 text-[1rem] font-semibold w-full hover:text-gray-300 hover">Home</p></Link>
            <Link href="#about"><p className="px-2 text-[1rem] font-semibold w-full hover:text-gray-300">About</p></Link>
            <Link href="#dolor"><p className="px-2 text-[1rem] font-semibold w-full hover:text-gray-300">Dolor</p></Link>
          </div>
          <Image alt='menu-icon' className='sm:hidden' src={isMenu?close:menuIcon} onClick={()=>setIsMenu(!isMenu)} />
        </div>
        {isMenu &&
          <nav className='flex h-[85vh] items-center sm:hidden'>
              <ul className="mt-2 space-y-6 px-5 " onClick={()=>setIsMenu(!isMenu)}>
                <li><Link href="#home" className='hover:text-gray-300 font-medium text-xl tracking-wide'>Home</Link></li>
                <li><Link href="#about" className='hover:text-gray-300 font-medium text-xl tracking-wide'>About</Link></li>
                <li><Link href="#dolor" className='hover:text-gray-300 font-medium text-xl tracking-wide'>Dolor</Link></li>
                <div>
                  <li className='flex justify-between gap-12'>
                    <Link href="/loremipsum1" className='text-[#666666] font-bold text-xl tracking-wide uppercase'>lore ipsum</Link>
                    <Link href="/loremipsum1" className='text-[#666666] font-bold text-xl tracking-wide uppercase'>comming soon</Link>
                  </li>
                </div>
              </ul>
              <div className='fixed bottom-0 w-full'>
                <div className="overflow-hidden flex  relative h-[50px]">
                  <Image src={backgroundImage} alt="background-image" layout="fill" />
                  <div className=" animate-marquee whitespace-nowrap text-white flex items-center">
                    <span className="text-[1.2rem] font-bold mx-4 uppercase">lorem ipsum</span>
                    <span className="text-[1.2rem] font-bold mx-4 uppercase">lorem ipsum</span>
                    <span className="text-[1.2rem] font-bold mx-4 uppercase">lorem ipsum</span>
                    <span className="text-[1.2rem] font-bold mx-4 uppercase">lorem ipsum</span>
                    <span className="text-[1.2rem] font-bold mx-4 uppercase">lorem ipsum</span>
                    <span className="text-[1.2rem] font-bold mx-4 uppercase">lorem ipsum</span>
                  </div>

                  <div className=" animate-marquee whitespace-nowrap text-white flex items-center">
                    <span className="text-[1.2rem] font-bold mx-4 uppercase">lorem ipsum</span>
                    <span className="text-[1.2rem] font-bold mx-4 uppercase">lorem ipsum</span>
                    <span className="text-[1.2rem] font-bold mx-4 uppercase">lorem ipsum</span>
                    <span className="text-[1.2rem] font-bold mx-4 uppercase">lorem ipsum</span>
                    <span className="text-[1.2rem] font-bold mx-4 uppercase">lorem ipsum</span>
                    <span className="text-[1.2rem] font-bold mx-4 uppercase">lorem ipsum</span>
                  </div>
                </div>
              </div>
          </nav>
        }

      </nav>
    </header>
  );
}
