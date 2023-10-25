import { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AppContext from "@/context/AppContext";
import { ActionButton } from "@/components";
import { SelectedPage } from "@/interfaces";
import { motion } from "framer-motion";

const Actions = () => {
  const { setPage } = useContext(AppContext);

  return (
    <motion.div
      className="mt-8 flex items-center gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <ActionButton>Join Now</ActionButton>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Actions;
