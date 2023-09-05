import { useState } from "react";
import {
  in1,
  in10,
  in2,
  in3,
  in4,
  in5,
  in6,
  in7,
  in8,
  in9,
  kanyon_video,
  out1,
  out2,
  out3,
  out31,
  out4,
  out41,
  out5,
  out6,
} from "../../assets";
import SlideGallery from "../../hoc/SlideGallery";
import { styles } from "../../styles";

export default function ImageGallery() {
  const [selected, setSelected] = useState(0);

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
            Photo Gallery
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
  { src: in1, width: 1080, height: 1080 },
  { src: in2, width: 1080, height: 1080 },
  { src: in3, width: 1080, height: 1080 },
  { src: in4, width: 1080, height: 1080 },
  { src: in5, width: 1080, height: 1080 },
  { src: in6, width: 1080, height: 1080 },
  { src: in7, width: 1080, height: 1080 },
  { src: in8, width: 1080, height: 1080 },
  { src: in9, width: 1080, height: 1080 },
  { src: in10, width: 1080, height: 1080 },
];

const outdoor = [
  { src: out1, width: 1080, height: 1080 },
  { src: out2, width: 1080, height: 1080 },
  { src: out3, width: 1080, height: 1080 },
  { src: out31, width: 1080, height: 1080 },
  { src: out4, width: 1080, height: 1080 },
  { src: out41, width: 1080, height: 1080 },
  { src: out5, width: 1080, height: 1080 },
  { src: out6, width: 1080, height: 1080 },
];

const whole = [...indoor, ...outdoor];

const selectedPreferences = [
  { id: 0, key: "whole", title: "Whole Renders", slides: whole },
  { id: 1, key: "indoor", title: "Indoor Renders", slides: indoor },
  { id: 2, key: "outdoor", title: "Outdoor Renders", slides: outdoor },
];
