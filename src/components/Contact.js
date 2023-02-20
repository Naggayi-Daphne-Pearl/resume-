import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className='container mx-auto py-16 md:py-20 md:mx-8'>
      <h5 class="text-center font-header text-3xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Contact info
      </h5>
      {/* Phone contact */}
      <div className="flex flex-col pt-16 lg:flex-row">
        <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
          <div className="flex items-center">
            <FaPhoneAlt className="bx bx-phone text-2xl text-grey-40" />
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
              My Phone
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            +(256) 785 796 401
          </p>
        </div>

        {/* Email */}
        <div class="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
          <div class="flex items-center">
            <i class="bx bx-envelope text-2xl text-grey-40"></i>
            <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
              My Email
            </p>
          </div>
          <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            daphnepearl101@gmail.com
          </p>
        </div>

        {/* Address */}
        <div class="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
          <div class="flex items-center">
            <i class="bx bx-map text-2xl text-grey-40"></i>
            <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
              My Address
            </p>
          </div>
          <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            Kampala,Uganda
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
