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

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-neutral-700">
        <Navbar />
        <Routes>
          <Route path="/media/*" element={<div>asd</div>} />

          <Route path="/module-house" element={<ModuleHouse />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Experience />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/media/image" element={<ImageGallery />} />
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
