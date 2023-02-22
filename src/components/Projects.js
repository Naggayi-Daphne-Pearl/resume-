import React from "react";
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
      title: "Portofolio",
      description: "I built my ",
      languages: "React, Tailwind",
      links: "https://list-n17c.onrender.com/",
    },
    {
      id: 3,
      title: "Agalm Technologies UI/UX design",
      description:
        "For this project, I designed the user interfaces for the web application for Agalm Technolgies. I worked closely with the developers and project owner to make sure the design was feasible and aligned with the project requirements.I conducted research and analyzed needs of the target audience. The final design features were simple with a focus of use and intutive designs. ",
      languages: "React, Tailwind",
      links: "https://list-n17c.onrender.com/",
    },
  ];
  return (
    <div className="container mx-auto py-16 md:py-20">
      <h2 class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        What I can do
      </h2>
      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-1 md:gap-10 md:pt-12 lg:grid-cols-3">
        {projects.map((item) => (
          <div className="group rounded px-8 py-12 shadow" key={item.id}>
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              {item.title}
            </h3>
            <p className="text-grey pt-4 text-sm md:text-start">
              {item.description}
            </p>
            <p className="font-semibold uppercase text-sm md:text-start pt-3"></p>
            <p className="font-semibold uppercase md:text-start text-sm pb-3">
              {item.languages}
            </p>
            <a href={item.links} className="text-primary md:text-start py-4">
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
