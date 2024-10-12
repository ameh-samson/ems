import { fetchData } from "@/configurations/fetchData";
import { ChildrenType, ContextType, User } from "@/types";
import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext<ContextType | undefined>(undefined);

export const AppContextProvider: React.FC<ChildrenType> = ({ children }) => {
  const [users, setUsers] = useState<{ results: User[] } | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setUsers(data);
    };
    getData();
  }, []);

  const values = { users };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
