import React, { useState } from "react";
import Navbar from "./Navbar";
import backgroundImage from "../assets//img/hero-image.jpg";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaAngleRight,
} from "react-icons/fa";
import { BsChevronRight } from "react-icons/bi";

function Home() {
  return (
    <>
      <Navbar />
      <div
        className="relative bg-cover bg-center bg-no-repeat py-8"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 z-20  bg-cover bg-center bg-no-repeat"></div>

        <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48 mx-auto px-6">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            {/* <div className="rounded-full border-8 border-primary shadow-xl">
        <img
          src="/assets/img/profile.jpg"
          className="h-48 rounded-full sm:h-56"
          alt="author"
        />
      </div>  */}
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h2 className="text-center italic font-header font-bold text-3xl text-white sm:text-left sm:text-5xl md:text-6xl">
                Hello I am Daphne
              </h2>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-white">
                    Connect with me
                  </p>
                  <div className="hidden sm:block">
                    <FaAngleRight className="bx bx-chevron-right text-3xl text-yellow" />
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <a
                    href="https://github.com/Naggayi-Daphne-Pearl"
                    className="pl-4"
                  >
                    <FaGithub className="bx bxl-github text-2xl text-white hover:text-yellow" />
                  </a>
                  <a href="https://twitter.com/DaphnePearl8" className="pl-4">
                    <FaTwitter className="bx bxl-twitter text-2xl text-white hover:text-yellow" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/daphne-naggayi-68070b185/"
                    className="pl-4"
                  >
                    <FaLinkedinIn className="bx bxl-linkedin text-2xl text-white hover:text-yellow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
