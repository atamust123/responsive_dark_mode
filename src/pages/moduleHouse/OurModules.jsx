import { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { kanyon_video } from "../../assets";
import { slides } from "../../constants";
import { ButtonDefault, ProjectCard, SlideGallery } from "../../hoc";
import Modal from "../../hoc/Modal";
import { styles } from "../../styles";

export default function OurModules() {
  const navigate = useNavigate();
  const [openedSlide, setOpen] = useState(null);
  return (
    <section className="relative w-full ">
      <div>
        {/* <img className="h-96 w-full" src={dome} alt="bg--gallery-photo" />
        <div className="absolute inset-0 top-[120px]  max-w-7xl px-0 py-16 flex flex-row items-start gap-5 h-fit">
          <h1 className={`${styles.heroHeadText} text-white  mb-12  mx-auto`}>
            Our Modules
          </h1>
        </div> */}
        <video loop muted autoPlay className="w-full">
          <source src={kanyon_video /**hills_video */} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 top-[120px]  max-w-7xl py-12 px-8 flex flex-row items-start gap-5 h-fit">
          <h1 className={`${styles.heroHeadText} text-white  mb-12  pl-8`}>
            Our Modules
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 mt-4 mx-auto pt-20 px-16">
        <div className="grid  col-start-1 col-end-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 ">
          {slides.map((slide) => {
            return (
              <ProjectCard
                name={slide.title}
                image={slide.src[0]}
                key={slide.title.toString()}
                buttonProps={{
                  title: (
                    <div className="flex items-center gap-2">
                      <HiShoppingCart /> Inspect
                    </div>
                  ),
                  onClick: () => {
                    navigate(`?module=${slide.id}`);
                    setOpen(slide);
                  },
                }}
              />
            );
          })}
        </div>
        <ul className="sticky bg-cyan-700 top-5 h-fit shadow-card shadow-blue-500/50 rounded-lg">
          <li className="px-4 py-2 cursor-default">Categories</li>
          {categories.map((c) => {
            return (
              <li className="px-4 py-8 relative rounded bg-transparent text-sm text-neutral-600 transition-all duration-300 hover:bg-cyan-900 dark:text-white dark:hover:bg-cyan-900 dark:hover:text-white cursor-pointer flex">
                <>
                  {c}
                  <span class="border h-5 w-8 rounded-xl text-center ml-auto divide-x-8">
                    0
                  </span>
                </>
              </li>
            );
          })}
        </ul>
      </div>
      <Modal
        onHide={() => {
          navigate("/our-modules");
          setOpen(null);
        }}
        open={!!openedSlide}
        key={openedSlide?.id || "modal-key"}
      >
        <div className="flex flex-1 gap-10">
          <div className="w-1/2">
            <h1 className="text-4xl text-orange-300 mb-8">Gallery</h1>
            <SlideGallery
              slides={openedSlide?.src?.map((src) => ({
                src,
                width: 720,
                height: 720,
              }))}
            />
            <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="py-2">
              <ButtonDefault title="Add An Order" />
            </div>
          </div>
          <div class="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
          <div className="w-1/2">
            <h1 className="text-4xl text-orange-300 mb-8">
              {openedSlide?.title}
            </h1>
            <p className="text-sm">{openedSlide?.description}</p>
          </div>
        </div>
      </Modal>
    </section>
  );
}

const categories = [
  "Tiny House",
  "Module Single Renders",
  "Module House",
  "Log Table",
  "Log Coffee Table",
  "Kitchenware",
];
