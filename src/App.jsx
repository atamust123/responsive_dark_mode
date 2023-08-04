import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ArchitectureCompany, ContactUs, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-neutral-700'>
        <Navbar />
        <Hero />
        <ArchitectureCompany />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <ContactUs />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
