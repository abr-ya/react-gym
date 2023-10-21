import { PropsWithChildren, useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/interfaces";
import AppContext from "@/context/AppContext";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IActionButton {}

const ActionButton = ({ children }: PropsWithChildren<IActionButton>): JSX.Element => {
  const { setPage } = useContext(AppContext);

  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
