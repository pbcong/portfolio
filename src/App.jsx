import { useState } from "react";
import Resume from "./components/Timeline";
import resumeData from "./resumeData";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header resumeData={resumeData} />
      <Intro resumeData={resumeData} />
      <Profile resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <Skills resumeData={resumeData} />
      <Contact resumeData={resumeData} />
      <Footer resumeData={resumeData} />
    </div>
  );
}

export default App;
