import { Footer, Navbar } from "./components";
import { Benefits, Classes, Contact, Home } from "./sections";

const App = () => {
  return (
    <div className="app bg-gray-20">
      <Navbar />
      <Home />
      <Benefits />
      <Classes />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
