import { motion } from "framer-motion";
import { useContext } from "react";
import { meetTheTeam } from "../constants";
import { LanguageContext } from "../context/LanguageContext";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { ProjectCard } from "./About";

const MeetTheTeam = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <motion.div variants={textVariant()}>
        <h6 className="text-orange-300 text-center mb-4">
          {meetTheTeam.title[lang]}
        </h6>
        <h1 className="text-4xl text-white text-center">
          {meetTheTeam.subTitle[lang]}
        </h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        {meetTheTeam.desc[lang]}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-20">
        {meetTheTeam.members.map((service) => (
          <ProjectCard
            description={service.desc}
            imgUrl={service.icon}
            title={service.title}
            key={service.title}
            className={{ img: "p-0" }}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(MeetTheTeam, "meet-the-team");
