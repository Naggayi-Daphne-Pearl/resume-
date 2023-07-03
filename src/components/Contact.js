import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail, GoLocation } from "react-icons/go";

function Contact() {
  return (
    <div className="container mx-auto py-16 md:py-20">
      <h5 className="text-center font-header text-2xl font-semibold uppercase text-primary sm:text-4xl lg:text-3xl">
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
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg hover:text-yellow">
            +(256) 785 796 401
          </p>
        </div>

        {/* Email */}
        <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
          <div className="flex items-center">
            <GoMail className="bx bx-envelope text-3xl text-grey-40" />
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
              My Email
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg hover:text-yellow">
            <a href="mailto:example@example.com">daphnepearl101@gmail.com</a>
          </p>
        </div>

        {/* Address */}
        <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
          <div className="flex items-center">
            <GoLocation className="bx bx-map text-2xl text-grey-30" />
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
              My Address
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg hover:text-yellow">
            Kampala,Uganda
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
