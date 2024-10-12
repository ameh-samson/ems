import { ReactNode } from "react";

export interface ChildrenType {
  children: ReactNode;
}

export interface ContextType {
  users: { results: User[] } | null;
}

export interface User {
  name: {
    first: string;
    last: string;
    title: string;
  };
  location: {
    city: string;
    country: string;
  };
  phone: string;
  picture: {
    large: string;
  };
}

export interface TeamsDataType {
  id: number;
  name: string;
  role: string;
  picture: string;
}
