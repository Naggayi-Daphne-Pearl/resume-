import React from "react";
import {FaLinkedinIn,FaGithub,FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <div className="bg-primary">
      <div className="container mx-auto flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          © Copyright 2023. All right reserved, Naggayi-Daphne-Pearl
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/daphne-naggayi-68070b185/"
            className="pl-4"
          >
            <FaLinkedinIn className="bx bxl-linkedin text-2xl text-white hover:text-yellow"/>
          </a>
          {/* Twitter */}
          <a href="ps://twitter.com/DaphnePearl8" className="pl-4">
            <FaTwitter className="bx bxl-twitter text-2xl text-white hover:text-yellow"/>
          </a>
          {/* Linkedin */}
          <a href="https://github.com/Naggayi-Daphne-Pearl" className="pl-4">
            <FaGithub className="bx bxl-github text-2xl text-white hover:text-yellow"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
