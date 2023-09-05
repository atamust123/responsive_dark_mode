import { motion } from "framer-motion";
import React from "react";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// export const ServiceCard = ({ index, title, icon, desc }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

export const ProjectCard = ({ description, imgUrl, title, navigate }) => {
  return (
    <div className="proj-imgbx w-80 border border-black rounded-none">
      <img src={imgUrl} alt={title + imgUrl} className="p-12" />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h6 className="text-orange-300">SERVICES WE DO</h6>
        <h1 className="text-4xl text-white">
          Our Highlighted Services For Architecture Design.
        </h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        The Single address of superior quality and trust. Structural steel has a
        life of 150 years. It is handed down from generation to generation.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-20">
        {services.map((service) => (
          <ProjectCard
            description={service.desc}
            imgUrl={service.icon}
            title={service.title}
            key={service.title}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
