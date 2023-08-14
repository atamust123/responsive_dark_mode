import {
  About,
  ArchitectureCompany,
  Experience,
  FAQ,
  Feedbacks,
  Hero,
  Tech,
} from "./components";

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
    </>
  );
}
