import React from "react";
import {FaCaretRight} from "react-icons/fa";

function Work() {
  return (
    <div className="py-16 md:py-20">
      <h2 class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Work I have done
      </h2>
      <p class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        This is work i have done previously
      </p>
      <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
        {/* Agalm */}
        <div class="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div class="md:w-2/5">
            <div class="flex justify-center md:justify-start">
              <span class="shrink-0">
                <h6 class="font-body text-2xl font-semibold uppercase text-grey-40 pr-0.5 sm:text-3xl lg:text-2xl">
                  Agalm technologies
                </h6>
              </span>
              <div class="relative ml-3 hidden w-full md:block"></div>
            </div>
          </div>

          <div class="md:w-3/5">
            <div class="relative flex md:pl-18">
              <div class="mt-1 flex">
                <FaCaretRight class="bx bxs-right-arrow hidden text-5xl text-primary md:block" />
                <div class="md:-mt-1 md:pl-8">
                  <span class="block font-body font-bold text-grey-40">
                    April 2022 - November 2022
                  </span>
                  <span class="block pt-2 font-header text-xl font-bold uppercase text-primary">
                    Frontend Developer
                  </span>
                  <div class="pt-2">
                    <span class="block font-body text-black">
                      I was part of the team that was given an opportunity to
                      develop a blockchain peer-to-peer marketplace. As a
                      backend Engineer used JavaScript (Node, Nest, Typescript,
                      PostgreSQL) AWS to develop the backend, currently
                      implementing solidity. The front-end team was using
                      ReactJS, material UI.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parkvile */}
        <div class="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div class="md:w-2/5">
            <div class="flex justify-center md:justify-start">
              <span class="shrink-0">
                <h6 class="font-body text-2xl font-semibold uppercase text-grey-40 pr-0.5 sm:text-3xl lg:text-2xl">
                  Parkville Project
                </h6>
              </span>
              <div class="relative ml-3 hidden w-full md:block"></div>
            </div>
          </div>

          <div class="md:w-3/5">
            <div class="relative flex md:pl-18">
              <div class="mt-1 flex">
                <FaCaretRight class="bx bxs-right-arrow hidden text-5xl text-primary md:block" />
                <div class="md:-mt-1 md:pl-8">
                  <span class="block font-body font-bold text-grey-40">
                    February 2022 - April 2022
                  </span>
                  <span class="block pt-2 font-header text-xl font-bold uppercase text-primary">
                    Full Stack developer
                  </span>
                  <div class="pt-2">
                    <span class="block font-body text-black">
                      I developed a system to manage car parking, battery hire,
                      and car tyre clinic. I developed both front and backend
                      using NodeJS, Mongo DB, CSS, Bootstrap, HTML5 and tested
                      my code using Chai and Mocha with all CRUD functionalities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
