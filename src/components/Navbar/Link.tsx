import { SelectedPage } from "@/interfaces";
import { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface ILink {
  title: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Link: FC<ILink> = ({ title, selectedPage, setSelectedPage }) => {
  const lowerCasePage = title.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {title}
    </AnchorLink>
  );
};

export default Link;
