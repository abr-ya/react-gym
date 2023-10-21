import { IAction, IApp, SelectedPage } from "@/interfaces";
import { createContext, FC, ReactNode, useReducer } from "react";

const initialState: IApp = {
  page: SelectedPage.Home,
};

type TYPE = "SET_PAGE" | "RESET_APP";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PAYL = any;

// Reducer mb separate File!
// todo interface for reducer!
const appReducer = (state: IApp, action: IAction<TYPE, PAYL>) => {
  switch (action.type) {
    case "SET_PAGE":
      return action.payload;
    case "RESET_APP":
      return initialState;
    default:
      return state;
  }
};
// Reducer mb separate File!

type AppContextType = ReturnType<typeof AppManager>;

const initialContext = {
  ...initialState,
  setPage: () => false,
  resetApp: () => false,
};
const AppContext = createContext<AppContextType>(initialContext);

interface IAppManagerResult extends IApp {
  setPage: (page: SelectedPage) => void;
  resetApp: () => void;
}

const AppManager = (): IAppManagerResult => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Set an Page
  const setPage = (page: SelectedPage) => {
    console.log("setPage,", page);
    dispatch({ type: "SET_PAGE", payload: page });
  };

  const resetApp = () => {
    dispatch({ type: "RESET_APP" });
  };

  return { ...state, setPage, resetApp };
};

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <AppContext.Provider value={AppManager()}>{children}</AppContext.Provider>
);

export default AppContext;
