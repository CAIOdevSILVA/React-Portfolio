import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Tech,
  Feedbacks,
  Works,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
} from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;