import { useContext, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { kanyon_video } from "../../assets";
import { categories, ourModules, slides } from "../../constants";
import { LanguageContext } from "../../context/LanguageContext";
import { ButtonDefault, ProjectCard, SlideGallery } from "../../hoc";
import Modal from "../../hoc/Modal";
import { Tabs } from "../../hoc/Tabs";
import { styles } from "../../styles";

export default function OurModules() {
  const { lang } = useContext(LanguageContext);
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
            {ourModules.title[lang]}
          </h1>
        </div>
      </div>

      <div className="grid gap-2 grid-cols-3 mt-4 mx-auto pt-20 px-16 max-sm:grid-cols-1 max-xl:pl-0 max-lg:grid-cols-3">
        <div className="grid grid-cols-2 col-span-2 max-lg:grid-cols-1 gap-4 max-sm:order-last max-lg:col-span-2">
          {slides.map((slide) => {
            return (
              <ProjectCard
                name={slide.title[lang]}
                image={slide.src[0]}
                key={slide.title["en"].toString()}
                buttonProps={{
                  title: (
                    <div className="flex items-center gap-2">
                      <HiShoppingCart /> {ourModules.button[lang]}
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

        <Tabs
          options={categories.map((c, i) => ({
            name: c[lang],
            children: c[lang],
            id: i,
            counter: i,
          }))}
        />
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
            <h1 className="text-4xl text-orange-300 mb-8">
              {ourModules.gallery[lang]}
            </h1>
            <SlideGallery
              slides={openedSlide?.src?.map((src) => ({
                src,
                width: 720,
                height: 720,
              }))}
            />
            <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="py-2">
              <ButtonDefault title={ourModules.addAnOrder[lang]} />
            </div>
          </div>
          <div class="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
          <div className="w-1/2">
            <h1 className="text-4xl text-orange-300 mb-8">
              {openedSlide?.title[lang]}
            </h1>
            <p className="text-sm">{openedSlide?.description[lang]}</p>
          </div>
        </div>
      </Modal>
    </section>
  );
}
