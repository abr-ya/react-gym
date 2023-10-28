import { useContext } from "react";
import { motion } from "framer-motion";
import AppContext from "@/context/AppContext";
import { ActionButton } from "@/components";
import { SelectedPage } from "@/interfaces";
import BenefitsPhoto from "@/assets/BenefitsPhoto.png";
import Main from "./Main";
import Description from "./Description";

const Benefits = () => {
  const { setPage } = useContext(AppContext);

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setPage(SelectedPage.Benefits)}>
        {/* HEADER */}
        <div>
          <h1>MORE THAN JUST GYM</h1>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals
            with ease. We provide true care into each and every member.
          </p>
        </div>

        {/* MAIN */}
        <Main />

        {/* PHOTO AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* PHOTO */}
          <img className="mx-auto" alt="benefits-page-graphic" src={BenefitsPhoto} />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <div>
                  <h1>
                    MILLIONS OF HAPPY MEMBERS GETTING <span className="text-primary-500">FIT</span>
                  </h1>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <Description />

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton>Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
