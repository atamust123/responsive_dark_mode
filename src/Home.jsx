import {
  About,
  ArchitectureCompany,
  Experience,
  FAQ,
  Feedbacks,
  Hero,
  Tech,
} from "./components";
import { SlideGallery } from "./hoc";

const slides = [
  {
    src: "./img/s1.jpg",
    width: 720,
    height: 720,
  },
  {
    src: "./img/s2.jpg",
    width: 720,
    height: 720,
  },
  {
    src: "./img/s3.jpg",
    width: 720,
    height: 720,
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <ArchitectureCompany />
      <About />
      <Experience />
      <Tech />
      <FAQ />
      <Feedbacks />
      {/* <GoogleMaps /> */}
      <SlideGallery slides={slides} />
    </>
  );
}
