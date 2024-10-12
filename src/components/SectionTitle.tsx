// components/SectionTitle.tsx

import { FC } from "react";
import { ChildrenType } from "@/types";

const SectionTitle: FC<ChildrenType> = ({ children }) => {
  return (
    <h1 className="text-3xl font-extrabold mb-6 text-center text-white bg-gradient-to-r from-teal-400 to-blue-500 p-4 rounded-lg shadow-lg">
      {children}
    </h1>
  );
};

export default SectionTitle;
