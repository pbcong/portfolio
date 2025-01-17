import { useState } from "react";
import Resume from "./components/Timeline";
import resumeData from "./resumeData";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Laptop from "./components/Laptop";
function App() {
  return (
    <div>
      <Header resumeData={resumeData} />
      <Intro resumeData={resumeData} />
      <Profile resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <Skills resumeData={resumeData} />
      <Projects resumeData={resumeData} />
      <Contact resumeData={resumeData} />
      <Footer resumeData={resumeData} />
    </div>
  );
}

export default App;
