import React, { useState } from "react";
import todoImage from "../assets/img/cap2.PNG";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "TO do list",
      description:
        "I built a web application that allows users to create and manage a to-do list. The application is designed to be simple and intuitive, allowing users to easily add new tasks, update tasks,and delete tasks as needed.",
      languages: "  HTML & CSS Python PostgresSQL Flask FlaskAlchemy",
      links: "https://list-n17c.onrender.com/",
    },
    {
      id: 2,
      title: "AgroDuuka",
      description:
       "I Built the  AgroDuuka website , which revolutionizes agricultural trade by directly connecting smallholder farmers to buyers through innovative mobile and web technology. Our platform eliminates middlemen, ensuring that farmers get fair prices for their produce while providing buyers with fresh, high-quality agricultural products at competitive prices.",
      languages: "Word Press",
      links: "https://agroduuka.com/",
    },
    {
      id: 3,
      title: "Agalm Technologies UI/UX design",
      description:
        "For this project, I designed the user interfaces for the web application for Agalm Technolgies. I worked closely with the developers and project owner to make sure the design was feasible and aligned with the project requirements.I conducted research and analyzed needs of the target audience. The final design features were simple with a focus of use and intutive designs. ",
      languages: "Figma",
      links: "https://www.figma.com/file/K58Nxz9XrUX5fGJ9tlJak8/Agalm?node-id=0%3A1&t=biROUwBGCjDy7jiY-1",
    },
    {
      id: 4,
      title: "Tours Finder",
      description:
        "Tours Finder allows users to search for places around Uganda. As a designer on this project, my goal was to design a website that is visual appealing, easy to use. I made research to identify the preferences and needs of the target audience. Based on my research, I created wire frames using Figma to create a clean design. My goal was to create a user-friendly and visually apealing design that would enable users find information of places they want to visit in Uganda.",
      languages: "React, Python, Flask Alchemy",
    },
   
  ];

  // Show more and less
  const [readMore, setReadMore] = useState(false);
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="container mx-auto py-16 md:py-20">
      <h2 className="text-center font-header text-3xl font-semibold uppercase text-primary sm:text-4xl lg:text-4xl">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-1 md:gap-10 md:pt-12 lg:grid-cols-2">
        {projects.map((item) => (
          <div className="group rounded px-8 py-12 font-body shadow" key={item.id}>
            <h3 className="pt-2 text-lg text-center font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              {item.title}
            </h3>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
              {readMore
                ? item.description
                : `${item.description.substring(0, 150)}...`}
            </p>
            <button
              className="text-primary pt-2 text-center"
              onClick={toggleReadMore}
            >
              {readMore ? "Show less" : " Show More"}
            </button>
            {/* <p className="text-grey pt-4 text-sm md:text-start">
              {item.description}
            </p> */}
            <p className="pt-6 font-body leading-relaxed text-grey-20 font-bold">
              Languages used: {item.languages}
            </p>
            <a href={item.links} className="container text-primary text-center pt-8">
              Live Demo
            </a>
          </div>
        ))}
        
      </div>
      <button className="container text-center font-header text-xl font-semibold uppercase text-primary p-8 hover:text-yellow hover:underline ">
        <a href="https://github.com/Naggayi-Daphne-Pearl">More Projects</a>
      </button>
    </div>

  );
}

export default Projects;
