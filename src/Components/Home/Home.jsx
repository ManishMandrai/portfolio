import React from "react";
import avatarImg from "../../assets/manish1.png";
import TextChange from "../TextChange";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen -mt-20 p-10 md:p-20 -mt-15">
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

          <div className="flex justify-center mt-10 space-x-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-gray-900 hover:text-blue-600 transition-colors duration-300"
              href="https://github.com/ManishMandrai"
            >
              <FaGithub className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-gray-900 hover:text-blue-600 transition-colors duration-300"
              href="https://x.com/ManishKumar3114"
            >
              <FaXTwitter className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-gray-900 hover:text-blue-600 transition-colors duration-300"
              href="https://www.linkedin.com/in/manish-kumar-mandrai/"
            >
              <CiLinkedin className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-gray-900 hover:text-blue-600 transition-colors duration-300"
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
