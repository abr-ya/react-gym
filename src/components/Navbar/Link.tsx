import { SelectedPage } from "@/interfaces";
import { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface ILink {
  title: string;
  page: SelectedPage;
  setPage: (value: SelectedPage) => void;
}

const Link: FC<ILink> = ({ title, page, setPage }) => {
  const lowerCasePage = title.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${page === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setPage(lowerCasePage)}
    >
      {title}
    </AnchorLink>
  );
};

export default Link;
