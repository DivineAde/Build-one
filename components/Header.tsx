import Image from 'next/image'
import Link from 'next/link'
import React from "react"
import { BiHomeAlt2 } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"
import { IoPricetagsOutline } from "react-icons/io5"
import { PiChatCircleBold } from "react-icons/pi"


const routes: any = [
  {
    title: "Home",
    href: "#",
    Icon: BiHomeAlt2,
  },
  {
    title: "Explore",
    href: "#",
    Icon: FiSearch,
  },
  {
    title: "Pricing",
    href: "#",
    Icon: IoPricetagsOutline,
  },
  {
    title: "About",
    href: "#",
    Icon: PiChatCircleBold,
  },
];

const Header = () => {
  return (
    <header className='hidden md:block sticky md:relative top-0 left-0 bg-white z-[99999]'>
      <nav className='flex flex-row justify-between items-center px-8 py-6'>
        <div className='flex items-center'>
          <Image src="/fashion logo.png" width={30} height={30} alt='logo' />
          <h1>FASHION</h1>
        </div>

        <ul className='hidden md:flex flex-row items-center gap-6'>
          <Link href={"#catelogue"}>
            <li className='cursor-pointer text-black hover:underline underline-offset-4 transition duration-0 hover:duration-150'>CATALOGUE</li>
          </Link>
          <Link href={"#fashion"}>
            <li className='cursor-pointer text-black hover:underline underline-offset-4 transition duration-0 hover:duration-150'>FASHION</li>
          </Link>
          <Link href={"#favorite"}>
            <li className='cursor-pointer text-black hover:underline underline-offset-4 transition duration-0 hover:duration-150'>FAVORITE</li>
          </Link>
          <Link href={"#lifestyle"}>
            <li className='cursor-pointer text-black hover:underline underline-offset-4 transition duration-0 hover:duration-150'>LIFESTYLE</li>
          </Link>
          <li className='flex items-center cursor-pointer'>
            <a className='px-4 py-2 bg-black text-white rounded-lg uppercase cursor-pointer transition duration-700 ease-in-out font-bold'>Sign up</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header