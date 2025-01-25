
'use client'
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { NavigationMenuDemo } from '@/components/layouts/navlink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
    {/* Navbar (Desktop) */}
    <div className="navbar flex justify-between items-center p-4 bg-[#F8F8F8]">
        {/* Left: Logo */}
        <div className="navbar-start">
      {/* Mobile Hamburger Menu Button */}
      <div className="block lg:hidden ml-4">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-2xl"
            onClick={toggleMenu}
          >
            <RxHamburgerMenu />
          </div>
          <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-[#F3F4F6]">
                  <li>
                    <Link href={"/"} className="block py-2 hover:text-[#351120]">Home</Link>
                  </li>
                  <li>
                    <Link href={"/treatment"} className="block py-2 hover:text-[#351120]">Goals</Link>
                  </li>
                  <li>
                    <Link href={"/spa"} className="block py-2 hover:text-[#351120]">Spas</Link>
                  </li>
                  <li>
                    <Link href={"/"} className="block py-2 hover:text-[#351120]">Blog</Link>
                  </li>
                </ul>
        </div>
      </div>
          <Link href="#" className="flex title-font font-medium items-center text-gray-900">
            <span className="ml-3 text-4xl">Glow Scout</span>
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <NavigationMenuDemo />
        </div>

        {/* Right: Sign In/Up Button */}
        <div className="navbar-end">
          <button className="inline-flex items-center bg-[#351120] text-[#F6E9CE] border-0 p-3 focus:outline-none text-xl rounded-3xl">
            Sign In/Up
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
