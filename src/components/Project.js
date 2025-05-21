import React from "react";
import { ExternalLink } from "lucide-react";
export default function Project() {
  const projects = [
    {
      id: 1,
      title: "schoolcrop",
      description:
        "Built an LMS to convert textbooks into interactive, engaging digital content.",
      // link: "https://example.com",
      technologies: [
        "HTML",
        "CSS",
        "javaScript",
        "BootStrap",
        "Responsive Design",
      ],
    },
    {
      id: 2,
      title: "FREE UPSC",
      description:
        "Led UPSC site with study resources, mind maps, and quizzes to simplify and enhance learning.",
      // link: "https://example.com",
      technologies: ["HTML", "CSS", "javaScript", "BootStrap"],
    },
    {
      id: 3,
      title: "MILAN EVENT – VJIM",
      description:
        "Developed VJIM’s website and event system to streamline registrations and improve online visibility.",
      // link: "https://example.com",
      technologies: [
        "HTML",
        "CSS",
        "javaScript",
        "BootStrap",
        "Responsive Design",
      ],
    },
    {
      id: 4,
      title: "Techadlien Portfolio Website",
      description:
        "Developed Techadlien’s portfolio site to showcase services, projects, and company info.",
      // link: "https://example.com",
      technologies: [
        "HTML",
        "CSS",
        "javaScript",
        "BootStrap",
        "Responsive Design",
      ],
    },

    {
      id: 5,
      title: "Modern Real Estate",
      description:
        "Created a full-stack app with React, Node.js, MongoDB, authentication, and CRUD features.",
      // link: "https://example.com",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Google OAuth",
        "CRUD Operations",
        "Image Upload",
        "Search Functionality",
        "Node.js",
        "MongoDB",
        "Redux Toolkit",
        "Render Hosting",
      ],
    },
    {
      id: 6,
      title: "Food Ordering App",
      description:
        "React e-commerce platform with user auth, profile editing, and admin panel for seamless shopping.",
      // link: "https://example.com",
      technologies: [
        "Next.js",
        "React",
        "React DOM",
        "Next Auth",
        "MongoDB",
        "TypeScript",
        "Tailwind CSS",
        "PostCSS",
        "Node.js (Types)",
        "React (Types)",
      ],
    },
    {
      id: 7,
      title: "Dharitri",
      description:
        "Built Dharitri, a scalable and secure blockchain website using React with interactive UI.",
      // link: "https://example.com",
      technologies: [
        "React",
        "javaScript",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
            A showcase of all projects that I have made
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-2 hover:border-indigo-500 transition-all duration-200 p-5"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-4 mb-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              {/* <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-all duration-200"
              >
                View Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
