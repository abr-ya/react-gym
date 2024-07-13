import { useContext } from "react";
import { motion } from "framer-motion";
import AppContext from "@/context/AppContext";
import { ActionButton, Title } from "@/components";
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
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Title>More than just gym</Title>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals
            with ease. We provide true care into each and every member.
          </p>
        </motion.div>

        {/* MAIN */}
        <Main />

        {/* PHOTO, TEXT AND BUTTON */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* PHOTO */}
          <img className="mx-auto" alt="benefits-page-graphic" src={BenefitsPhoto} />

          {/* TEXT AND BUTTON */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Title>
                    Millions of happy members getting <span className="text-primary-500">fit</span>
                  </Title>
                </motion.div>
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
