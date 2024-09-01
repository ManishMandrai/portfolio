import React from "react";
import ecommerceImg from "../../assets/ecom.png"; // Adjust the path as needed
import crudApiImg from "../../assets/curd.png"; // Adjust the path as needed
import chatAppImg from "../../assets/chat.png"; // Adjust the path as needed

const projectImages = {
  ecommerce: ecommerceImg,
  crudApi: crudApiImg,
  chatApp: chatAppImg,
};

const ProjectCard = ({ title, main, showDemo, imageUrl, demoLink, sourceLink }) => {
  return (
    <div className="p-4 md:p-6 flex flex-col w-full max-w-sm bg-gray-800 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover rounded-t-xl" src={imageUrl} alt={`${title} Banner`} />
      <h3 className="px-4 text-xl md:text-2xl font-bold text-gray-200 mt-4">{title}</h3>
      <p className="px-4 text-sm md:text-md text-gray-300 mt-2 mb-4">{main}</p>
      <div className="flex justify-around px-4 mb-4">
        {showDemo && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2 px-4 text-sm md:text-lg bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Demo
          </a>
        )}
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-4 text-sm md:text-lg bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-3xl md:text-5xl text-black font-bold mb-12 text-center">
        Projects
      </h1>
      <div className="py-8 px-4 flex flex-wrap justify-center gap-8">
        <ProjectCard
          title="Full-Stack Ecommerce App"
          main="Developed a Full-stack ECommerce application with the MERN stack."
          imageUrl={projectImages.ecommerce}
          demoLink="https://ecommerce-demo-link.com"
          sourceLink="https://github.com/ManishMandrai/Full_Stack_Ecommerce"
        />
        <ProjectCard
          title="CRUD API-Backend Project"
          main="Created a robust CRUD API using Node.js and Express.js with RESTful endpoints."
          imageUrl={projectImages.crudApi}
          demoLink="https://crud-api-demo-link.com"
          sourceLink="https://github.com/ManishMandrai/crud-api"
        />
        <ProjectCard
          title="Chat-App (React App)"
          main="Built a real-time chat application with React, Firebase, and responsive design."
          imageUrl={projectImages.chatApp}
          showDemo={true}
          demoLink="https://chatappmanish.netlify.app/"
          sourceLink="https://github.com/ManishMandrai/ReactChatApp"
        />
      </div>
    </div>
  );
};

export default Projects;
