import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa"; // Adding the phone icon
import { FaLocationArrow } from "react-icons/fa"; // Adding a location icon
import { FiLinkedin, FiGithub } from "react-icons/fi"; // LinkedIn and GitHub icons

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <div
      id="Footer"
      className="flex flex-col justify-center bg-[#232323] text-white p-10 md:p-12 items-center"
    >
      <div className="mb-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Contact Me</h1>
        <h3 className="text-sm md:text-lg font-normal">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-lg space-y-2 text-center">
        <li className="flex gap-2 items-center justify-center">
          <MdOutlineEmail size={24} />
          <a
            href="mailto:manishkumarmandrai@gmail.com"
            className="hover:underline transition duration-300"
          >
            manishkumarmandrai@gmail.com
          </a>
        </li>

        <li className="flex gap-2 items-center justify-center">
          <FaPhone size={20} />
          <a href="tel:+918435213004" className="hover:underline transition duration-300">
            +91 84352 13004
          </a>
        </li>

        <li className="flex gap-2 items-center justify-center">
          <FaLocationArrow size={20} />
          <span>Jabalpur, India</span>
        </li>
      </ul>

      {/* Social Media Links */}
      <div className="mt-4 flex space-x-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/manish-kumar-mandrai/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://github.com/ManishMandrai"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300"
        >
          <FiGithub />
        </a>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p>© {currentYear} Manish Kumar. All Rights Reserved.</p>
        <p>Built with ❤️ by Manish Kumar</p>
      </div>
    </div>
  );
};

export default Footer;
