import { useEffect, useState } from "react";
import { Footer, Navbar } from "./components";
import { SelectedPage } from "./interfaces";
import { Benefits, Classes, Contact, Home } from "./sections";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0);
      if (window.scrollY === 0) setSelectedPage(SelectedPage.Home);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home />
      <Benefits />
      <Classes />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
