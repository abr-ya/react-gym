export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface IAppContext {
  page: SelectedPage;
}

export interface IAction<T, P> {
  type: T;
  payload?: P;
}

export interface IBenefitData {
  icon: JSX.Element;
  title: string;
  description: string;
}
