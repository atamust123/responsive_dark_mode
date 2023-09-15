import { motion } from "framer-motion";
import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experience } from "../constants";
import { LanguageContext } from "../context/LanguageContext";
import { SectionWrapper } from "../hoc";
import { useSlide } from "../hooks/useSlide";
import { textVariant } from "../utils/motion";

export const ExperienceCard = ({ experience, lang }) => {
  const className = `slide-${experience?.title?.[lang].replace(" ", "-")}`;
  const { fading } = useSlide(className);
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <a
          target="_blank"
          href="https://atamust123.github.io/portfolio/"
          className="text-white text-[24px] font-bold underline"
        >
          {experience.title[lang]}
        </a>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points?.[lang].map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      <div>
        {experience?.img?.map((img) => (
          <img
            src={img}
            className={`${className} ${fading} w-full p-6 h-auto`}
            alt={img}
            title={img}
            key={img}
          />
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <motion.div variants={textVariant()} id="portfolio">
        <h6 className="my-6 text-center text-orange-300">
          {experience.title[lang]}
        </h6>
        <h1 className={`text-4xl text-white  mb-6 text-center`}>
          {experience.subtitle[lang]}
        </h1>
        <p className="text-center text-gray-400">{experience.desc[lang]}</p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experience.experiences.map((experience) => (
            <ExperienceCard
              experience={experience}
              lang={lang}
              key={experience.title.en.split(" ").join(",")}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
