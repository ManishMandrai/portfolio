import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);

  const toggleMenu = () => {
    openMenu(!menu);
  };

  return (
    <nav className="flex justify-between items-center container mx-auto text-black px-6 py-4 md:px-20">
      <span className="text-2xl font-bold tracking-wide">Manish Kumar</span>

      <ul
        className={`fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg z-50 flex flex-col justify-center items-center space-y-8 transition-transform duration-300 ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:bg-transparent md:flex-row md:space-y-0 md:space-x-6 md:p-0`}
      >
        <a href="#About">
          <li className="text-white md:text-black text-xl md:text-md transition-all duration-300">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="text-white md:text-black text-xl md:text-md transition-all duration-300">
            Skills
          </li>
        </a>
        <a href="#Projects">
          <li className="text-white md:text-black text-xl md:text-md transition-all duration-300">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-white md:text-black text-xl md:text-md transition-all duration-300">
            Contact
          </li>
        </a>
        {menu && (
          <RiCloseLine
            size={30}
            className="text-white absolute top-8 right-8 md:hidden cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </ul>

      {!menu && (
        <RiMenu2Line
          size={30}
          className="text-black md:hidden cursor-pointer"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
