import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import Sponsors from "./Sponsors";
import Actions from "./Actions";

const Home = () => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you
              Dream of.. Get Your Dream Body Now.
            </p>
          </div>

          {/* ACTIONS */}
          <Actions />
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </div>
      {/* SPONSORS */}
      <Sponsors />
    </section>
  );
};

export default Home;
