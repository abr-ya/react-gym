import { useContext } from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AppContext from "@/context/AppContext";
import { SelectedPage } from "@/interfaces";
import { Title } from "@/components";

interface IBenefitItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const BenefitItem = ({ icon, title, description }: IBenefitItem) => {
  const { setPage } = useContext(AppContext);

  return (
    <motion.div variants={childVariant} className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">{icon}</div>
      </div>

      <Title tag="h3">{title}</Title>
      <p className="my-3">{description}</p>
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

export default BenefitItem;
