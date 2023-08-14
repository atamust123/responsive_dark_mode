import { styles } from "../../styles";

export default function ImageGallery() {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div>
        <img
          className="h-screen w-full"
          src="./img/gallery/gallery-bg.jpg"
          alt="bg--gallery-photo"
        />
      </div>
      {/* <div className="absolute inset-0 top-[120px]  max-w-7xl mx-auto px-0 py-16 flex flex-row items-start gap-5">
        <h1 className={`${styles.heroHeadText} text-white  mb-12`}>
          Photo Gallery
        </h1>
      </div> */}
    </section>
  );
}
