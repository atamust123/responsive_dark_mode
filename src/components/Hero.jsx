import { useEffect } from "react";
import { styles } from "../styles";
import { HiArrowNarrowRight } from "react-icons/hi";
import { s1, s3, s2 } from "../assets";

const Hero = () => {
  useEffect(() => {
    function carousel() {
      const x = document.getElementsByClassName("mySlides");
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) {
        myIndex = 1;
      }
      x[myIndex - 1].style.display = "block";
      setTimeout(carousel, 9000);
    }

    let myIndex = 0;
    carousel();
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div>
        <img className="mySlides animate-fading h-screen w-full" src={s1} />
        <img className="mySlides animate-fading h-screen w-full" src={s2} />
        <img className="mySlides animate-fading h-screen w-full" src={s3} />
      </div>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto px-0 py-16 flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="w-2/3">
          <h6 className="underline underline-offset-1 text-orange-300 mb-12">
            ARCHITECTURE COMPANY
          </h6>
          <h1 className={`${styles.heroHeadText} text-white  mb-12`}>
            Modern Building With High-Aesthetics.
          </h1>

          <button className="bg-transparent border-solid border-2 border-black px-8 py-4">
            <a
              href="#portfolio"
              className="underline underline-offset-1 flex items-center gap-4  "
            >
              VIEW PROJECT <HiArrowNarrowRight />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
