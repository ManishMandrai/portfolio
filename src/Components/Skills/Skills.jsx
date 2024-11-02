import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaBootstrap, FaAngular } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiRedux, SiCplusplus } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

const skills = [
  { icon: <SiCplusplus color="#00599C" size={50} />, name: 'C++' },
  { icon: <FaReact color="#61DAFB" size={50} />, name: 'React.js' },
  { icon: <FaJs color="#F7DF1E" size={50} />, name: 'JavaScript' },
  { icon: <SiMongodb color="#47A248" size={50} />, name: 'MongoDB' },
  { icon: <IoLogoJavascript color="#F7DF1E" size={50} />, name: 'Express.js' },
  { icon: <DiNodejsSmall color="#8CC84B" size={50} />, name: 'Node.js' },
  { icon: <SiRedux color="#764ABC" size={50} />, name: 'Redux' },
  { icon: <FaHtml5 color="#E34F26" size={50} />, name: 'HTML5' },
  { icon: <FaCss3 color="#1572B6" size={50} />, name: 'CSS3' },
  { icon: <FaAngular color="#DD0031" size={50} />, name: 'Angular' },
  { icon: <FaBootstrap color="#7952B3" size={50} />, name: 'Bootstrap' },
  { icon: <SiFirebase color="#FFCA28" size={50} />, name: 'Firebase' }
];

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24 bg-gray-100">
      <h1 className="text-2xl md:text-4xl font-bold mb-12 text-black text-center">
        My Current Skills Are . . 
      </h1>

      {/* Skills Icons */}
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 bg-white border border-gray-300 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center items-center mb-4">
                {skill.icon}
              </div>
              <span className="text-lg text-gray-700 font-semibold text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-black text-center mt-6">
        . . And Continue Exploring New Technologies.
      </h2>
    </div>
  );
};

export default Skills;
