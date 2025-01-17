import React from "react";

const SkillIcon = ({ imagePath, name }) => (
  <div className="relative group flex justify-center items-center">
    <div
      className="w-12 h-12 flex items-center justify-center rounded-lg bg-white shadow-sm 
                border border-gray-100 hover:border-blue-500 transition-all duration-300
                group-hover:shadow-md p-2"
    >
      <img
        src={imagePath}
        alt={name}
        className="w-full h-full object-contain"
      />
    </div>
    <div
      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
    >
      <div className="bg-gray-800 text-white px-2 py-1 rounded-md text-xs whitespace-nowrap">
        {name}
      </div>
    </div>
  </div>
);

const Skills = () => {
  const skills = [
    { name: "Python", imagePath: "icons/python.svg" },
    { name: "PyTorch", imagePath: "icons/pytorch.svg" },
    { name: "Huggingface", imagePath: "icons/hf.svg" },
    { name: "Sklearn", imagePath: "icons/sklearn.svg" },
    { name: "Numpy", imagePath: "icons/numpy.svg" },
    { name: "Pandas", imagePath: "icons/pandas.svg" },
    { name: "Matplotlib", imagePath: "icons/Matplotlib.svg" },
    { name: "FastAPI", imagePath: "icons/fastapi.svg" },
    { name: "Linux", imagePath: "icons/linux.svg" },
    { name: "Git", imagePath: "icons/git.svg" },
    { name: "HTML", imagePath: "icons/html.svg" },
    { name: "CSS", imagePath: "icons/css.svg" },
    { name: "JavaScript", imagePath: "icons/javascript.svg" },
    { name: "React", imagePath: "icons/react.svg" },
    { name: "Node.js", imagePath: "icons/nodejs.svg" },
    { name: "LangChain", imagePath: "icons/langchain.svg" },
    { name: "Git", imagePath: "icons/git.svg" },
    { name: "Docker", imagePath: "icons/docker.svg" },
    { name: "MongoDB", imagePath: "icons/MongoDB.svg" },
    { name: "OpenAI SDK", imagePath: "icons/openai.svg" },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 mt-5 mb-5">
      <h2 className="text-3xl text-gray-800 font-bold">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-5">
        {skills.map((skill, index) => (
          <SkillIcon
            key={index}
            imagePath={skill.imagePath}
            name={skill.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
