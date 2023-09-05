import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import {
  About,
  ContactUs,
  Experience,
  Footer,
  Navbar,
  StarsCanvas,
} from "./components";
import ModuleHouse from "./pages/moduleHouse/ModuleHouse";
import OurServices from "./pages/ourServices/OurServices";
import ImageGallery from "./pages/gallery/ImageGallery";
import VideoGallery from "./pages/gallery/VideoGallery";
import OurModules from "./pages/moduleHouse/OurModules";
import { WhatsAppButton } from "./hoc";

const App = () => {
  // ending with "/" is important basename in browser router when user clicks on the logo
  return (
    <BrowserRouter basename="/responsive_dark_mode/">
      <div className="relative z-0 bg-neutral-700">
        <Navbar />
        <WhatsAppButton />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Experience />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/media-image" element={<ImageGallery />} />
          <Route path="/media-video" element={<VideoGallery />} />
          <Route path="/module-house" element={<ModuleHouse />} />
          <Route path="/our-modules" element={<OurModules />} />

          <Route path="/" element={<Home />} />
        </Routes>

        <div className="relative z-0" id="contact-us">
          <ContactUs />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
