import { IBenefitData } from "@/interfaces";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import BenefitItem from "./BenefitItem";

const benefits: Array<IBenefitData> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const Main = () => {
  return (
    <div className="mt-5 items-center justify-between gap-8 md:flex">
      {benefits.map((benefit: IBenefitData) => (
        <BenefitItem key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} />
      ))}
    </div>
  );
};

export default Main;
