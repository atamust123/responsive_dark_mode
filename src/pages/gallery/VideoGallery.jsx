import { useState } from "react";
import SlideGallery from "../../hoc/SlideGallery";
import { styles } from "../../styles";
import { galleryBg } from "../../assets";

export default function VideoGallery() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="relative w-full mx-auto p-20">
      <div>
        <img className="h-96 w-full" src={galleryBg} alt="bg--gallery-video" />
        <div className="absolute inset-0 top-[120px]  max-w-7xl px-0 py-16 flex flex-row items-start gap-5 h-fit">
          <h1 className={`${styles.heroHeadText} text-white  mb-12  mx-auto`}>
            Video Gallery
          </h1>
        </div>
      </div>
      Todo
      <div>
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
                {val.title}
              </a>
            </li>
          ))}
        </ul>

        <SlideGallery slides={selectedPreferences[selected]?.slides} />
      </div>
    </section>
  );
}
const videos = [{ src: "", width: 1080, heigth: 1080 }];
const selectedPreferences = [{ id: 0, key: "", title: "", slides: videos }];
