import { motion } from "framer-motion";
import { meetTheTeam } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { ProjectCard } from "./About";

const MeetTheTeam = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h6 className="text-orange-300">MEET THE TEAM</h6>
        <h1 className="text-4xl text-white">OUR TEAM.</h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        Meet the team of our estate agency! Our team is composed of experienced
        and dedicated professionals who are passionate about helping people find
        their dream homes. Our agents have extensive knowledge of the local real
        estate market and are committed to providing exceptional service to our
        clients. From finding the perfect property to negotiating the best deal,
        our team is here to guide you every step of the way. We pride ourselves
        on our integrity, professionalism, and commitment to our clients. Get in
        touch with us today to learn more about how we can help you with your
        real estate needs
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-20">
        {meetTheTeam.map((service) => (
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

export default SectionWrapper(MeetTheTeam, "meet-the-team");
