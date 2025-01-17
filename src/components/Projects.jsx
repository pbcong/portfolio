import React from "react";
import resumeData from "../resumeData";

const Projects = ({ resumeData }) => {
  const projects = resumeData.projects;

  return (
    <div className="max-w-7xl mx-auto p-6 overflow-hidden">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>

      <div className="relative">
        <div className="flex overflow-x-scroll space-x-6 snap-x snap-mandatory scrollbar-hide">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[600px] md:w-[600px] flex-shrink-0 bg-white p-6 rounded-lg shadow-lg snap-center transform transition-transform hover:scale-105 hover:shadow-2xl hover:z-10"
              style={{ transition: "transform 0.3s, z-index 0.3s" }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600 mb-4">
                Tech Stack: {project.technologies}
              </p>
              <p className="text-gray-700 text-lg">{project.description}</p>
            </div>
          ))}
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 focus:outline-none hover:bg-gray-700"
          onClick={() => {
            document
              .querySelector(".overflow-x-scroll")
              .scrollBy({ left: -400, behavior: "smooth" });
          }}
        >
          &#8592;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 focus:outline-none hover:bg-gray-700"
          onClick={() => {
            document
              .querySelector(".overflow-x-scroll")
              .scrollBy({ left: 400, behavior: "smooth" });
          }}
        >
          &#8594;
        </button>
      </div>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, and Opera */
        }
        .overflow-x-scroll {
          overflow-y: hidden; /* Prevent vertical scrolling */
        }
      `}</style>
    </div>
  );
};

export default Projects;
