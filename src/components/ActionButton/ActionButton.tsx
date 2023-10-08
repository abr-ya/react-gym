import { PropsWithChildren } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/interfaces";

interface IActionButton {
  setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: PropsWithChildren<IActionButton>): JSX.Element => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
