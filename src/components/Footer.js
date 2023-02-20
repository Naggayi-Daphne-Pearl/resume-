import React from "react";
import {FaLinkedinIn,FaGithub,FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <div className="bg-primary">
      <div className="container mx-auto flex flex-col justify-between py-6 sm:flex-row">
        <p class="text-center font-body text-white md:text-left">
          © Copyright 2023. All right reserved, Naggayi-Daphne-Pearl
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/daphne-naggayi-68070b185/"
            class="pl-4"
          >
            <FaLinkedinIn class="bx bxl-linkedin text-2xl text-white hover:text-yellow"/>
          </a>
          {/* Twitter */}
          <a href="ps://twitter.com/DaphnePearl8" class="pl-4">
            <FaTwitter class="bx bxl-twitter text-2xl text-white hover:text-yellow"/>
          </a>
          {/* Linkedin */}
          <a href="https://github.com/Naggayi-Daphne-Pearl" class="pl-4">
            <FaGithub className="bx bxl-github text-2xl text-white hover:text-yellow"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
