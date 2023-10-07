import { useContext } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { hills_video, home1, home2 } from "../assets";
import { mainPage } from "../constants";
import { LanguageContext } from "../context/LanguageContext";
import { useSlide } from "../hooks/useSlide";
import { styles } from "../styles";

const Hero = () => {
  useSlide();
  const navigate = useNavigate();
  const { lang } = useContext(LanguageContext);
  return (
    <section className={`relative w-full h-calcMax mx-auto`}>
      <div className="lg:hidden">
        <img className="mySlides animate-fading h-screen w-full" src={home1} />
        <img className="mySlides animate-fading h-screen w-full" src={home2} />
      </div>

      <video loop muted autoPlay className="w-full max-lg:hidden">
        <source src={hills_video} type="video/webm" />
        <source src={hills_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto px-0 py-16 flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="w-2/3">
          <h6 className="underline underline-offset-1 text-orange-300 mb-12">
            {mainPage.title[lang]}
          </h6>
          <h1 className={`${styles.heroHeadText} text-white  mb-12`}>
            {mainPage.subtitle[lang]}
          </h1>
          <a
            href="#_"
            onClick={() => navigate("/our-modules")}
            className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex items-center gap-4">
              {mainPage.button[lang]} <HiArrowNarrowRight />
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
