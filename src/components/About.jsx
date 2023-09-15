import { motion } from "framer-motion";
import React, { useContext } from "react";

import { service } from "../constants";
import { LanguageContext } from "../context/LanguageContext";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

export const ProjectCard = ({
  description,
  imgUrl,
  title,
  className: { wrapper, img } = { img: undefined, wrapper: undefined },
}) => {
  return (
    <div
      className={`proj-imgbx w-80 border border-black rounded-none ${wrapper}`}
    >
      <img
        src={imgUrl}
        alt={title + imgUrl}
        className={`${img ? img : "p-12"}`}
      />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};

const About = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <motion.div variants={textVariant()}>
        <h6 className="text-orange-300">{service.title[lang]}</h6>
        <h1 className="text-4xl text-white">{service.subtitle[lang]}</h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {service.desc[lang]}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-20">
        {service.services.map((service) => (
          <ProjectCard
            description={service.desc[lang]}
            imgUrl={service.icon}
            title={service.title[lang]}
            key={service.title["en"]}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
