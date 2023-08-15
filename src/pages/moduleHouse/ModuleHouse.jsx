import { useState } from "react";
import Modal from "../../hoc/Modal";

const images = [
  "./img/module-house-2.jpg",
  "./img/module-house-3.jpg",
  "./img/module-house-4.jpg",
];

export default function ModuleHouse() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(images[0]);
  return (
    <section className="relative w-full mx-auto p-20">
      <h1 className={`text-4xl text-white  mb-12 text-center`}>Module House</h1>
      <div className="grid gap-4 grid-cols-2">
        <img
          className="h-full max-w-full rounded-lg cursor-pointer"
          src={"./img/module-house-1.jpg"}
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
          Create the tiny house of your dreams
        </h6>
        <p className="text-gray-400">
          Our modular tiny house system gives you the freedom to create the
          living space of your dreams. You can purchase areas such as kitchen,
          bathroom, living room and bedroom piece by piece according to your
          needs and tastes. Thus, you can create a unique and personalized
          living space.
        </p>
      </div>

      <Modal onHide={setOpen} open={open}>
        <img src={selected} />
      </Modal>
    </section>
  );
}
