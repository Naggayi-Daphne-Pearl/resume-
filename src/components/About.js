import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaAngleRight,
} from "react-icons/fa";

function About() {
  const skills = [
    { id: 1, skill: "HTML & CSS", percentWidth: "90%", percent: "80%" },
  ];
  return (
    <div id="about">
      <div className="container mx-auto flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="min-w-[25%] px-10 text-start sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            I am Naggayi Daphne Pearl and I am a full stack developer
          </h4>
          <p className="pt-6 font-body leading-relaxed text-grey-20">
            I recently graduated from Refactory Uganda with an advanced
            certificate in software development and have been honing my skills
            through various projects. I have gained experience in being a full
            stack developer in my previous internship at Refactory Uganda. This
            has made me able to learn new technologies quickly which makes me a
            strong candidate for this role.
          </p>
          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <p class="font-body text-lg font-semibold uppercase text-grey-20">
                Connect with me
              </p>
              <div class="hidden sm:block">
                <FaAngleRight class="bx bx-chevron-right text-2xl text-primary" />
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <a href="https://github.com/Naggayi-Daphne-Pearl">
                <FaGithub class="bx bxl-github text-2xl text-primary hover:text-yellow" />
              </a>
              <a href="https://twitter.com/DaphnePearl8" class="pl-4">
                <FaTwitter class="bx bxl-twitter text-2xl text-primary hover:text-yellow" />
              </a>
              <a
                href="https://www.linkedin.com/in/daphne-naggayi-68070b185/"
                class="pl-4"
              >
                <FaLinkedinIn class="bx bxl-linkedin text-2xl text-primary hover:text-yellow" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-[25%] px-10 pl-4 pt-10 sm:w-1/2 lg:w-2/5 lg:pl-12 lg:pt-0">
        {skills.map((item) => (
          <div className="pt-6" key={item.id}>
            <div className="flex items-end justify-between">
              <h4 class="font-body font-semibold uppercase text-black">
                {item.skill}
              </h4>
              <h3 class="font-body text-2xl font-bold text-primary">
                {item.percent}
              </h3>
            </div>
            <div class="mt-2 h-3 w-full rounded-full bg-lila">
              <div class="h-3 rounded-full bg-primary" style={{}}>{item.percentWidth}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
