import { createContext, useState, useEffect, useCallback } from "react";

import { getAllUsers } from "services/Users";

import type { IUser, IAppContext } from "types";
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const defaultAppContext: IAppContext = {
  showSidebar: false,
  isError: false,
  setIsError: () => {},
  setShowSidebar: () => {},
  toggle: () => {},
  staticData: [],
  setStaticData: () => {},
  dynamicData: [],
  setDynamicData: () => {},
};

export const AppContext = createContext<IAppContext>(defaultAppContext);

export const AppProvider: FC<Props> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(
    defaultAppContext.showSidebar
  );
  const [staticData, setStaticData] = useState<IUser[]>(
    defaultAppContext.staticData
  );
  const [dynamicData, setDynamicData] = useState<IUser[]>(
    defaultAppContext.staticData
  );
  const [isError, setIsError] = useState<boolean>(defaultAppContext.isError);

  const toggle = (): void => {
    setShowSidebar(!showSidebar);
  };

  const fetchAllUsers = useCallback(async () => {
    getAllUsers()
      .then((data) => {
        localStorage.setItem("lendsqr-users", JSON.stringify(data));
        setStaticData(data);
        setDynamicData(data);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
      });
  }, []);

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        toggle,
        staticData,
        setStaticData,
        dynamicData,
        setDynamicData,
        isError,
        setIsError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
