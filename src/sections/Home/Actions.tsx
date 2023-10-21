import { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AppContext from "@/context/AppContext";
import { ActionButton } from "@/components";
import { SelectedPage } from "@/interfaces";

const Actions = () => {
  const { setPage } = useContext(AppContext);

  return (
    <div className="mt-8 flex items-center gap-8">
      <ActionButton>Join Now</ActionButton>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </div>
  );
};

export default Actions;
