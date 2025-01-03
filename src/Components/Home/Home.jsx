import React from "react";
import avatarImg from "../../assets/20241222_122937.png";
import TextChange from "../TextChange";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  bg-gray-100 to-white p-10 md:p-20">
      <div className="flex flex-col items-center">
        <img
          className="rounded-full shadow-lg w-40 md:w-60 mb-8 hover:scale-105 transition-transform duration-300"
          src={avatarImg}
          alt="Manish Kumar"
        />
        <div className="text-center">
          <h1 className="text-black text-4xl md:text-7xl font-extrabold leading-tight tracking-tight mb-4 animate-fadeIn">
            <TextChange />
          </h1>
          <h3 className="text-2xl md:text-3xl text-gray-700 font-medium mt-2">
            Full Stack Web Developer
          </h3>

          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl">
            I'm passionate about creating interactive applications and experiences on the web. With expertise in the MERN stack.
          </p>

          <div className="mt-6">
            <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Technical Proficiencies:</h4>
            <ul className="flex flex-wrap justify-center gap-4 text-gray-700">
              <li className="bg-gray-200 rounded-full px-4 py-2">JavaScript</li>
              <li className="bg-gray-200 rounded-full px-4 py-2">React</li>
              <li className="bg-gray-200 rounded-full px-4 py-2">Node.js</li>
              <li className="bg-gray-200 rounded-full px-4 py-2">MongoDB</li>
              <li className="bg-gray-200 rounded-full px-4 py-2">Express.js</li>
              <li className="bg-gray-200 rounded-full px-4 py-2">HTML & CSS</li>
            </ul>
          </div>

          <div className="flex justify-center mt-10 space-x-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-gray-900 hover:text-gray-900 transition-colors duration-300"
              href="https://github.com/ManishMandrai"
            >
              <FaGithub className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-gray-900 hover:text-blue-500 transition-colors duration-300" // Twitter blue
              href="https://x.com/ManishKumar3114"
            >
              <FaXTwitter className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-gray-900 hover:text-blue-700 transition-colors duration-300" // LinkedIn blue
              href="https://www.linkedin.com/in/manish-kumar-mandrai/"
            >
              <CiLinkedin className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-gray-900 hover:text-pink-500 transition-colors duration-300" // Instagram pink
              href="https://www.instagram.com/manish._.mandrai/"
            >
              <FaInstagram className="w-8 h-8 md:w-10 md:h-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
