import React from "react";
import myResume from "../assets/resume/my-cv.pdf";
import {FiMenu} from 'react-icons/fi'

function Navbar() {
  const navlinks = [
    { id: 1, text: "About", href: "/about" },
    { id: 2, text: "Services", href: "/services" },
    { id: 3, text: "Projects", href: "/projects" },
    { id: 4, text: "Contacts", href: "/contact" },
  ];
  return (
    <div className="relative container mx-auto p-6">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <a href="/">
            <h4 className="lg:w-48 text-black text-3xl mr-2 my-4 font-header font-extrabold">
              DAPHNE
            </h4>
          </a>
        </div>
        {/* Menu items fpr large screens */}
        <div className="hidden space-x-6 md:flex">
          <ul className="flex items-center text-xl">
            {navlinks.map((item) => (
              <a href={item.href}>
                <li key={item.id} className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-black">
                    {item.text}
                  </span>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
              </a>
            ))}
            <li className="group pl-6">
              <a href={myResume} className='hidden p-3 px-6 pt-2 text-white bg-primary rounded-full baseline hover:bg-secondary md:block'>
                <button>Resume</button>
              </a>
            </li>
          </ul>
        </div>

        {/* Menu items for small screen */}
        <button id="menu-btn" className="block hamburger md:hidden focus:outline-none">
          <FiMenu/>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>

          {/* Mobile menu  */}
          <div className="md:hidden">
            <ul className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font bold bg-primary sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
              {navlinks.map(item => (
                <a key={item.id} href={item.href}>
                  <li>{item.text}</li>
                </a>
              ))}
            </ul>

          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
