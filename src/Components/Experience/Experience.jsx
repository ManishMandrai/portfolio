
import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaBootstrap, FaAngular } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiRedux, SiCplusplus } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

const skills = [
  { icon: <SiCplusplus color="#00599C" size={50} />, name: 'C++' },// C++ icon
  { icon: <FaJs color="#F7DF1E" size={50} />, name: 'JavaScript' },
  { icon: <SiMongodb color="#47A248" size={50} />, name: 'MongoDB' }, 
  { icon: <IoLogoJavascript color="#F7DF1E" size={50} />, name: 'Express.js' }, // Use a custom or closest match icon
  { icon: <FaReact color="#61DAFB" size={50} />, name: 'React.js' },
  { icon: <DiNodejsSmall color="#8CC84B" size={50} />, name: 'Node.js' },
  { icon: <SiRedux color="#764ABC" size={50} />, name: 'Redux' }, // Redux icon
  { icon: <FaHtml5 color="#E34F26" size={50} />, name: 'HTML5' },
  { icon: <FaCss3 color="#1572B6" size={50} />, name: 'CSS3' },
  { icon: <FaAngular color="#DD0031" size={50} />, name: 'Angular' },
  { icon: <FaBootstrap color="#7952B3" size={50} />, name: 'Bootstrap' },
  { icon: <SiFirebase color="#FFCA28" size={50} />, name: 'Firebase' }
];

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 ">
      <h1 className="text-2xl md:text-4xl font-bold mb-12 text-black text-center">
       My Current Skills Are . .
      </h1>

      {/* Skills Icons */}
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 bg-gray-900 border rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300"
            >
              {skill.icon}
              <span className="mt-4 text-orange-500 text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-black text-center">
        . . And Continue Exploring New Technologies.
      </h2>
    </div>
  );
};

export default Experience;
