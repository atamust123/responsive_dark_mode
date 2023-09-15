import { useContext, useState } from "react";
import { kanyon_video } from "../../assets";
import { photoGallery } from "../../constants";
import SlideGallery from "../../hoc/SlideGallery";
import { styles } from "../../styles";
import { LanguageContext } from "../../context/LanguageContext";

export default function ImageGallery() {
  const { lang } = useContext(LanguageContext);
  const [selected, setSelected] = useState(0);
  const { selectedPreferences, title } = photoGallery || {};
  return (
    <section className="relative w-full">
      <div>
        {/* <img className="h-96 w-full" src={galleryBg} alt="bg--gallery-photo" />
        <div className="absolute inset-0 top-[120px]  max-w-7xl px-0 py-16 flex flex-row items-start gap-5 h-fit">
          <h1 className={`${styles.heroHeadText} text-white  mb-12  mx-auto`}>
            Photo Gallery
          </h1>
        </div> */}

        <video loop muted autoPlay className="w-full">
          <source src={kanyon_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 top-[120px]  max-w-7xl py-12 px-8 flex flex-row items-start gap-5 h-fit">
          <h1 className={`${styles.heroHeadText} text-white  mb-12  pl-8`}>
            {title[lang]}
          </h1>
        </div>
      </div>

      <div className="mx-auto py-20 px-16">
        <ul className="list-none sm:flex flex-row gap-10 p-12 justify-center">
          {selectedPreferences.map((val) => (
            <li
              key={val.key}
              className={`${
                selectedPreferences[selected].key === val.key
                  ? "text-white"
                  : "text-secondary"
              } self-center hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={(e) => {
                e.preventDefault();
                setSelected(val.id);
              }}
            >
              <a href="#" className="underline-transition-tag">
                {val.title[lang]}
              </a>
            </li>
          ))}
        </ul>

        <SlideGallery slides={selectedPreferences[selected]?.slides} />
      </div>
    </section>
  );
}
