import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa"; // Adding the phone icon

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div className="mb-4 text-center">
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl space-y-2 text-center">
        <li className="flex gap-1 items-center justify-center">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:manishkumarmandrai@gmail.com"
            className="hover:underline"
          >
            manishkumarmandrai@gmail.com
          </a>
        </li>

        <li className="flex gap-1 items-center justify-center">
          <FaPhone />
          <a href="tel:+918435213004" className="hover:underline">
            +91 84352 13004
          </a>
        </li>
        <li className="flex gap-1 items-center justify-center">
          <span>📍</span> Jabalpur, India
        </li>
      </ul>

      {/* Copyright Section */}
      <div className="mt-4 text-center">
        <p className="text-xs md:text-sm">
          © {new Date().getFullYear()} Manish Kumar. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
