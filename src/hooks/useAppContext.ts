import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useDataContext must be used within a AppContextProvider");
  return context;
};
