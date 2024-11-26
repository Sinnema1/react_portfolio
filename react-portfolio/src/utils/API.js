const API = {
    getFeaturedProjects: async () => {
      // Mocked response
      return {
        data: [
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
        ],
      };
    },
  };
  
  export default API;