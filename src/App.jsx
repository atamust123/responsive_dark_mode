import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { ContactUs, Footer, Navbar, StarsCanvas } from "./components";
import LanguageProvider from "./context/LanguageContext";
import { WhatsAppButton } from "./hoc";
import ECatalogue from "./pages/gallery/ECatalogue";
import ImageGallery from "./pages/gallery/ImageGallery";
import ModuleHouse from "./pages/moduleHouse/ModuleHouse";
import OurModules from "./pages/moduleHouse/OurModules";
import OurServices from "./pages/ourServices/OurServices";

const App = () => {
  // ending with "/" is important basename in browser router when user clicks on the logo
  return (
    <BrowserRouter basename="/responsive_dark_mode/">
      <LanguageProvider>
        <div className="relative z-0 bg-neutral-700">
          <Navbar />
          <WhatsAppButton />
          <Routes>
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/media-image" element={<ImageGallery />} />
            <Route path="/media-catalogue" element={<ECatalogue />} />
            {/* <Route path="/media-video" element={<VideoGallery />} /> for further use */}
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
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
