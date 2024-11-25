import React from "react";

const projects = [
  {
    id: 1,
    title: "Employee Tracker",
    description:
      "A command-line application for managing a company’s employee database.",
    github: "https://github.com/Sinnema1/Employee_Tracker",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A web application that displays current weather and forecasts for various locations.",
    github: "https://github.com/Sinnema1/Weather_App",
  },
  {
    id: 3,
    title: "Vehicle Builder",
    description: "A web-based tool for configuring and customizing vehicles.",
    github: "https://github.com/Sinnema1/Vehicle_Builder",
  },
  {
    id: 4,
    title: "README Generator",
    description:
      "A Node.js application to generate professional README files based on user input.",
    github: "https://github.com/Sinnema1/README_Generator",
  },
  {
    id: 5,
    title: "Personal Blog",
    description:
      "A challenge project demonstrating proficiency with JavaScript and web APIs.",
    github:
      "https://github.com/Sinnema1/Justin_Manning_02-Challenge_Javascript_Web_API",
  },
  {
    id: 6,
    title: "Employee Payroll Tracker",
    description:
      "Another challenge project showcasing advanced JavaScript concepts.",
    github:
      "https://github.com/Sinnema1/Justin_Manning_02-Challenge_Javascript",
  },
];

const Portfolio = () => {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Portfolio</h1>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-6 mb-4" key={project.id}>
            <div
              className="card h-100 shadow"
              style={{ border: "1px solid #ddd", borderRadius: "20px" }}
            >
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
