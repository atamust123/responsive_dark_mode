import { About, Experience, FAQ, Feedbacks, Hero } from "./components";
import MeetTheTeam from "./components/MeetTheTeam";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ArchitectureCompany /> */}
      <About />
      <Experience />
      {/* <Tech /> */}
      <FAQ />
      <MeetTheTeam />
      {/* <Feedbacks /> */}
      {/* <GoogleMaps /> */}
    </>
  );
}
