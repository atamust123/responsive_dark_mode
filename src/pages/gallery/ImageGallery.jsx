import { useState } from "react";
import SlideGallery from "../../hoc/SlideGallery";
import { styles } from "../../styles";

export default function ImageGallery() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="relative w-full mx-auto p-20">
      <div>
        <img
          className="h-96 w-full"
          src="./img/gallery/gallery-bg.jpg"
          alt="bg--gallery-photo"
        />
        <div className="absolute inset-0 top-[120px]  max-w-7xl px-0 py-16 flex flex-row items-start gap-5 h-fit">
          <h1 className={`${styles.heroHeadText} text-white  mb-12  mx-auto`}>
            Photo Gallery
          </h1>
        </div>
      </div>
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

const indoor = [
  { src: "./public/img/gallery/inside/1.jpg", width: 1080, height: 1080 },
  { src: "./public/img/gallery/inside/2.jpg", width: 1080, height: 1080 },
  { src: "./public/img/gallery/inside/3.jpg", width: 1080, height: 1080 },
  { src: "./public/img/gallery/inside/4.jpg", width: 1080, height: 1080 },
  { src: "./public/img/gallery/inside/5.jpg", width: 1080, height: 1080 },
  { src: "./public/img/gallery/inside/6.jpg", width: 1080, height: 1080 },
  { src: "./public/img/gallery/inside/7.jpg", width: 1080, height: 1080 },
  { src: "./public/img/gallery/inside/8.jpg", width: 1080, height: 1080 },
  { src: "./public/img/gallery/inside/9.jpg", width: 1080, height: 1080 },
  { src: "./public/img/gallery/inside/10.jpg", width: 1080, height: 1080 },
];

const outdoor = [
  { src: "./public/img/gallery/outside/1.jpg", width: 1080, height: 1080 },
  { src: "./public/img/gallery/outside/2.jpg", width: 1080, height: 1080 },
  { src: "./public/img/gallery/outside/3.jpg", width: 1080, height: 1080 },
  { src: "./public/img/gallery/outside/3-1.jpg", width: 1080, height: 1080 },
  { src: "./public/img/gallery/outside/4.jpg", width: 1080, height: 1080 },
  { src: "./public/img/gallery/outside/4-1.jpg", width: 1080, height: 1080 },
  { src: "./public/img/gallery/outside/5.jpg", width: 1080, height: 1080 },
  { src: "./public/img/gallery/outside/6.jpg", width: 1080, height: 1080 },
];

const whole = [...indoor, ...outdoor];

const selectedPreferences = [
  { id: 0, key: "whole", title: "Whole Renders", slides: whole },
  { id: 1, key: "indoor", title: "Indoor Renders", slides: indoor },
  { id: 2, key: "outdoor", title: "Outdoor Renders", slides: outdoor },
];
