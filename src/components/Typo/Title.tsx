import { PropsWithChildren } from "react";

interface ITitle {
  tag?: "h1" | "h2" | "h3";
}

const Title = ({ tag = "h1", children }: PropsWithChildren<ITitle>) => {
  if (tag == "h1") return <h1 className="basis-3/5 font-montserrat text-3xl font-bold uppercase">{children}</h1>;

  return null;
};

export default Title;
