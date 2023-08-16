import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { github } from "../assets";
import { fadeIn } from "../utils/motion";
import ButtonDefault from "./ButtonDefault";

export default function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  buttonProps,
}) {
  const { title, ...rest } = buttonProps || {};
  const defaultConditionalRender = () => {
    return <ButtonDefault {...buttonProps} />;
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={rest.onClick}
    >
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        scale={1}
        transitionSpeed={150}
        className="bg-tertiary cursor-pointer p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 line-clamp-3 text-secondary text-[14px]">
            {description}
          </p>
        </div>

        {title && defaultConditionalRender?.()}

        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}
