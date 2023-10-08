import { FC } from "react";

interface ILink {
  title: string;
}

const Link: FC<ILink> = ({ title }) => {
  return <div>{title}</div>;
};

export default Link;
