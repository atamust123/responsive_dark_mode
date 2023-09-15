import { useContext, useState } from "react";
import {
  moduleHouse1,
  moduleHouse2,
  moduleHouse3,
  moduleHouse4,
} from "../../assets";
import { moduleHouse } from "../../constants";
import { LanguageContext } from "../../context/LanguageContext";
import Modal from "../../hoc/Modal";

const images = [moduleHouse2, moduleHouse3, moduleHouse4];

export default function ModuleHouse() {
  const { lang } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(images[0]);
  return (
    <section className="relative w-full mx-auto p-20">
      <h1 className={`text-4xl text-white  mb-12 text-center`}>
        {moduleHouse.title[lang]}
      </h1>
      <div className="grid gap-4 grid-cols-2">
        <img
          className="h-full max-w-full rounded-lg cursor-pointer"
          src={moduleHouse1}
          onClick={() => setOpen(true)}
        />
        <div className="grid grid-cols-3 gap-4 grid-rows-none">
          {images.map((img) => {
            return (
              <div
                key={img}
                onClick={() => {
                  setSelected(img);
                  setOpen(true);
                }}
                className="cursor-pointer"
              >
                <img
                  className="h-40 max-w-full rounded-lg"
                  src={img}
                  alt={img}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pt-8 w-4/6 text-center m-auto">
        <h6 className="underline underline-offset-1 text-orange-300 mb-3">
          {moduleHouse.subtitle[lang]}
        </h6>
        <p className="text-gray-400">{moduleHouse.desc[lang]}</p>
      </div>

      <Modal onHide={setOpen} open={open}>
        <img src={selected} />
      </Modal>
    </section>
  );
}
