import React from "react";
import Typewriter from "typewriter-effect";
import Laptop from "./Laptop";

const Intro = ({ resumeData }) => {
  return (
    <div className="min-h-screen -mt-12" id="home">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat filter blur-md"
          style={{
            backgroundImage: "url('/images/header-background.jpg')",
          }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-30 flex items-center justify-between h-screen px-20 text-white">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-center md:w-1/2">
          <div className="text-5xl font-bold mb-4">Hello World!</div>
          <div className="text-2xl mb-2 font-bold">I am Cong, a</div>
          <div className="text-3xl font-semibold text-white">
            <Typewriter
              options={{
                strings: ["Data Scientist", "Software Engineer", "Musician"],
                autoStart: true,
                loop: true,
                cursor: "_",
              }}
            />
          </div>
        </div>

        {/* Laptop Section */}
        <div className="flex justify-end items-center w-full h-full md:w-1/2 mt-10">
          <Laptop />
        </div>
      </div>
    </div>
  );
};

export default Intro;
