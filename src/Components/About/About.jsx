import React from "react";
import AboutImg from "../../assets/developer.png"; // Ensure you have a suitable image
import { IoArrowForward, IoDownload } from "react-icons/io5"; // Import IoDownload icon

const About = () => {
  return (
    <div
      id="About"
      className="bg-blue-300 shadow-lg md:shadow-xl mx-4 md:mx-12 lg:mx-20 rounded-lg p-8 md:p-12"
    >
      {/* Heading on Top */}
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black text-center">
        About Me
      </h2>

      {/* Content Wrapper with Flexbox */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Image on the Left */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={AboutImg}
            alt="Developer"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-2xl border-4 border-white"
          />
        </div>

        {/* Content on the Right */}
        <div className="md:w-1/2 p-4 md:p-6 text-black">
          <p className="text-lg md:text-xl leading-relaxed md:leading-loose text-center md:text-left">
            <span className="font-semibold text-blue-800">I'm Manish Kumar</span>, a dedicated
            Full Stack Developer with a strong foundation in the MERN stack
            <b>(MongoDB, Express.js, React, and Node.js)</b>. My passion lies in
            transforming complex problems into intuitive, user-friendly
            solutions. With a deep understanding of modern web development, I
            strive to create robust, scalable, and high-performing applications
            that deliver exceptional user experiences.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start mt-6 space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="#Projects"
              className="flex items-center bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View My Work
              <IoArrowForward className="ml-2" size={20} />
            </a>
            <a
              href="https://drive.google.com/file/d/1QyvxkOBBjXV-gnxEHYaGYXWKlBr5Eqgd/view?usp=sharing"
              download
              className="flex items-center bg-gradient-to-r from-gray-800 to-gray-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Download Resume
              <IoDownload className="ml-2" size={20} /> {/* Change icon here */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
