import React from "react";

const Profile = () => {
  return (
    <section
      className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 "
      id="about"
    >
      {/* Container */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start px-6 gap-6">
        {/* Left Column - Profile Picture */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/images/profilepic.jpg" // Replace with your profile pic URL
            alt="Profile"
            className="w-64 h-64 object-cover rounded-md shadow-lg"
          />
        </div>

        {/* Right Column - Profile Text */}
        <div className="md:w-1/2 flex flex-col justify-center mt-6 md:mt-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Cong Pham
          </h2>
          <h3 className="text-xl text-gray-600 mt-2">Data Scientist</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I’m a passionate software engineer specializing in building
            high-quality web applications. With a strong focus on performance
            and scalability, I enjoy crafting intuitive user experiences and
            solving complex problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
