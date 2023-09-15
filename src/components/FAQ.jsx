import { motion } from "framer-motion";
import React, { useContext } from "react";

import { faq } from "../constants";
import { LanguageContext } from "../context/LanguageContext";
import { SectionWrapper } from "../hoc";
import Collapse from "../hoc/Collapse";
import { textVariant } from "../utils/motion";

const FAQ = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <motion.div variants={textVariant()} className="flex" id="news">
        <div>
          <h6 className="underline underline-offset-1 text-orange-300 mb-6">
            {faq.title[lang]}
          </h6>

          <h1 className={`text-4xl text-white  mb-6`}>{faq.subtitle[lang]}</h1>
        </div>
        <p className="w-1/2 text-gray-500">{faq.desc[lang]}</p>
      </motion.div>

      <div className="mt-6 grid gap-y-6 gap-x-4">
        {faq.faqs.map((project) => (
          <Collapse
            key={project.name.en?.replace(" ", "-")}
            button={{ title: project.name[lang] }}
            id={project.name.en?.replace(" ", "-")}
          >
            {project.description[lang]}
          </Collapse>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(FAQ, "");
