import { motion } from "framer-motion";
import React from "react";

import { faq } from "../constants";
import { ProjectCard, SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const FAQ = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex" id="news">
        <div>
          <h6 className="underline underline-offset-1 text-orange-300 mb-6">
            DIRECT FROM THE BLOG POSTS
          </h6>

          <h1 className={`text-4xl text-white  mb-6`}>
            FREQUENTLY ASKED QUESTİONS
          </h1>
        </div>
        <p className="w-1/2 text-gray-500">
          Checkout Our Latest News And Articles
        </p>
      </motion.div>

      <div className="mt-6 flex flex-wrap gap-7">
        {faq.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(FAQ, "");
