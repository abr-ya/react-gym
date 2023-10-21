import { useContext, useEffect, useState } from "react";
import { Footer, Navbar } from "./components";
import { SelectedPage } from "./interfaces";
import { Benefits, Classes, Contact, Home } from "./sections";
import AppContext, { AppProvider } from "./context/AppContext";

const App = () => {
  const { setPage } = useContext(AppContext);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0);
      if (window.scrollY === 0) setPage(SelectedPage.Home);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppProvider>
      <div className="app bg-gray-20">
        <Navbar isTopOfPage={isTopOfPage} />
        <Home />
        <Benefits />
        <Classes />
        <Contact />
        <Footer />
      </div>
    </AppProvider>
  );
};

export default App;
