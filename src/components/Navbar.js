import React, { useState } from "react";
import { Link } from "react-router-dom";
import myResume from "../assets/resume/my-cv.pdf";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const navlinks = [
    { id: 1, text: "About", href: "/about" },
    { id: 2, text: "Services", href: "/services" },
    { id: 3, text: "Projects", href: "/projects" },
    { id: 4, text: "Contacts", href: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative container mx-auto">
      <div className="w-full z-40 top-0 py-4 sm:py-8 absolute"></div>
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <Link to="/">
            <h4 className="w-48 text-yellow lg:text-5xl pr-1 my-2 font-open-sans text-3xl mx-4 font-extrabold">
              DAPHNE
            </h4>
          </Link>
        </div>
        {/* Menu items for large screens */}
        <div className="hidden space-x-6 md:flex">
          <ul className="flex items-center text-xl ml-12">
            {navlinks.map((item) => (
              <Link to={item.href} key={item.id}>
                <li>
                  <span className="cursor-pointer pt-0.5 font-header text-2xl font-semibold uppercase text-yellow pl-6 ">
                    {item.text}
                  </span>
                  <span className="block h-0.5 w-full bg-transparent hover:bg-primary"></span>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Menu items for small screens */}
        <div className="lg:hidden">
          <button
            id="menu-btn"
            onClick={toggleMenu}
            className="flex items-center px-4 mx-4 py-2 text-yellow text-4xl"
          >
            <FiMenu />

            {/* Mobile menu */}
            <div
              className={`${
                isOpen ? "" : "hidden"
              } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
              <ul className="text-sm lg:flex-grow">
                {navlinks.map((item) => (
                  <Link
                    to={item.href}
                    key={item.id}
                    className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
                  >
                    {item.text}
                  </Link>
                ))}
              </ul>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
