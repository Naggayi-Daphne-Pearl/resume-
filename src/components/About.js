import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaAngleRight,
} from "react-icons/fa";

function About() {
  const skills = [
    { id: 1, skill: "React", percent: "70%", width: "70%" },
    { id: 2, skill: "Python", percent: "75%", width: "75%" },
    { id: 2, skill: "Javascript", percent: "80%", width: "80%" },
    { id: 2, skill: "Database Management", percent: "90%", width: "90%" },
    { id: 2, skill: "Version Control", percent: "80%", width: "80%" },

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
            stack developer in my previous internship at Refactory Uganda. 

          </p>
          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <p className="font-body text-lg font-semibold uppercase text-grey-20">
                Let's Connect
              </p>
              <div className="hidden sm:block">
                <FaAngleRight className="bx bx-chevron-right text-2xl text-primary" />
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <a href="https://github.com/Naggayi-Daphne-Pearl">
                <FaGithub className="bx bxl-github text-2xl text-primary hover:text-yellow" />
              </a>
              <a href="https://twitter.com/DaphnePearl8" className="pl-4">
                <FaTwitter className="bx bxl-twitter text-2xl text-primary hover:text-yellow" />
              </a>
              <a
                href="https://www.linkedin.com/in/daphne-naggayi-68070b185/"
                className="pl-4"
              >
                <FaLinkedinIn className="bx bxl-linkedin text-2xl text-primary hover:text-yellow" />
              </a>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="min-w-[25%] px-10 pl-4 pt-10 sm:w-1/2 lg:w-2/5 lg:pl-12 lg:pt-0">
        {skills.map((item) => (
          <div className="pt-6" key={item.id}>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-xl leading-relaxed text-grey-20">
                {item.skill}
              </h4>
              <h3 className="font-body text-2xl font-bold text-primary">
                {item.percent}
              </h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-primary"
                style={{ width: item.width }}
              >
                {item.percentWidth}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
}

export default About;
