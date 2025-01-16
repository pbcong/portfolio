import React from "react";
import Typewriter from "typewriter-effect";

const Intro = ({ resumeData }) => {
  return (
    <div className=" min-h-screen">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('../../public/images/header-background.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-screen text-white text-center">
        <div className="text-5xl font-bold mb-4">Hello World!</div>
        <div className="text-2xl mb-2 font-bold">I am Cong, a</div>
        <div className="text-3xl font-semibold text-white ">
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
    </div>
  );
};

export default Intro;
