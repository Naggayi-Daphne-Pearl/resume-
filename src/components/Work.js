import React from "react";
import { FaCaretRight } from "react-icons/fa";

function Work() {
  const workdone = [
    {
      id: 1,
      company: "Agalm Technologies",
      date: "April 2022 - November 2022",
      job: "Front end developer",
      description:
        " I was part of the team that was given an opportunity todevelop a blockchain peer-to-peer marketplace. As a backend Engineer used JavaScript (Node, Nest, Typescript,PostgreSQL) AWS to develop the backend, currentlyimplementing solidity. The front-end team was using ReactJS, material UI.",
    },
    {
      id: 2,
      company: "Parkville Project",
      date: "February 2022 - April 2022",
      job: "Full Stack Developer",
      description:
        " I developed a system to manage car parking, battery hire,and car tyre clinic. I developed both front and backend using NodeJS, Mongo DB, CSS, Bootstrap, HTML5 and tested my code using Chai and Mocha with all CRUD functionalities",
    },
    {
      id: 3,
      company: "Netify IT Solutions",
      date: "January 2023 - April 2023",
      job: "Full Stack Developer and IT Support",
      description:
        "As a Web Developer and IT Support professional, I created and maintained websites while providing technical assistance to users. I utilized my expertise in coding, scripting, and web design to develop innovative web solutions that met clients' needs. ",
    },
    {
      id: 4,
      company: "Mobiklinic ",
      date: "May 2023 - To Date",
      job: "Mobile Applications Developer",
      description:
        "As a Mobile Apps Developer, I design, develop, and maintain mobile applications for various platforms, including iOS and Android. I utilize my expertise in programming languages such as React Native and Flutter to create functional and user-friendly applications.  ",
    },
  ];
  return (
    <div className="py-16 md:py-20 ">
      <h2 className="text-center font-header text-3xl font-semibold uppercase text-primary sm:text-4xl lg:text-4xl">
        Companies
      </h2>
      <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
        {workdone.map((item) => (
          <div
            className="mt-8 flex flex-col text-center md:flex-row md:text-left"
            key={item.id}
          >
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <h6 className="font-header text-2xl  uppercase text-black pr-0.5 sm:text-3xl lg:text-2xl">
                    {item.company}
                  </h6>
                </span>
                <div className="relative ml-3 hidden w-full md:block"></div>
              </div>
            </div>

            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <div className="mt-1 flex">
                  <FaCaretRight className="bx bxs-right-arrow hidden text-5xl text-primary md:block" />
                  <div className="md:-mt-1 md:pl-6">
                    <span className="block font-body font-bold text-grey-40">
                      {item.date}
                    </span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                      {item.job}
                    </span>
                    <div className="pt-2">
                      <span className=" container mx-auto text-start font-body leading-relaxed text-grey-20  text-start sm:w-3/4 lg:w-1/5 ">
                        {item.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
