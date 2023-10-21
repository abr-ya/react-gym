export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface IApp {
  page: SelectedPage;
}

export interface IAction<T, P> {
  type: T;
  payload?: P;
}
