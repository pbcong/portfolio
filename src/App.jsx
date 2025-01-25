import { useState, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="fixed inset-0 bg-zinc-900 z-50 flex items-center justify-center">
          <img
            src="/images/loader.gif"
            alt="Loading..."
            className="w-32 h-32"
          />
        </div>
      )}
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
