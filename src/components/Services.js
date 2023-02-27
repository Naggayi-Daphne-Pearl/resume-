import React from "react";
import developmentIcon from "../assets/img/icon-development-white.svg";
import developmentIconBlack from "../assets/img/icon-development-black.svg";
import mobileIcon from "../assets/img/icon-mobile-white.svg";
import mobileIconBlack from "../assets/img/icon-mobile-black.svg";
import graphicsIcon from "../assets/img/icon-graphics-white.svg";
import graphicsIconBlack from "../assets/img/icon-graphics-black.svg";

function Services() {
  return (
    <div className="container mx-auto py-16 md:py-20">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        What I can do
      </h2>
      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-1 md:gap-10 md:pt-12 lg:grid-cols-3">
        {/* WEB DEVELOPMENT */}
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src={developmentIcon} alt="development icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src={developmentIconBlack} alt="development icon" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              WEB DEVELOPMENT
            </h3>
            <p className="pt-6 font-body leading-relaxed text-grey-20 group-hover:text-white md:text-base">
              I have acquired skills that has made a full-stack developer. I
              have used React,JavaScript, HTML and CSS for my front end
              projects. For the back end projects, I have used Nodejs,
              Python,Nextjs and PostgreSQL.
            </p>
          </div>
        </div>

        {/* Mobile Development */}
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src={mobileIcon} alt="Mobile Application icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src={mobileIconBlack} alt="Mobile Application icon" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Mobile Development
            </h3>
            <p className="pt-6 font-body leading-relaxed text-grey-20 group-hover:text-white md:text-base">
              I created and developed mobile applications for mobile devices. I
              have honed my skills to develop responsive designs
            </p>
          </div>
        </div>

        {/* WEB DESIGN */}
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src={graphicsIcon} alt="Mobile Application icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src={graphicsIconBlack} alt="Mobile Application icon" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Web Design
            </h3>
            <p className="pt-6 font-body leading-relaxed text-grey-20 group-hover:text-white md:text-base">
              I have designed and built interfaces, navigation an aesthetic of
              websites for clients using Figma. I have also designed the user
              journeys and work flows for the clients using the websites.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
