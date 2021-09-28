import React, { useState, createContext, ReactNode } from 'react';

type GroupPage = {
  id: number;
  title: string;
};

type Page = {
  isRouted: boolean;
  groupPage: any;
  defineRoutedState: (state: boolean) => void;
  definePageInfo: (data: any) => void;
};

type Node = {
  children: ReactNode;
};

export const MainContext = createContext({} as Page);

export function MainContextProvider({ children }: Node) {
  const [isRouted, setRouted] = useState(false);
  const [groupPage, setGroupPage] = useState({});

  const defineRoutedState = (state: boolean) => {
    setRouted(state);
  };

  const definePageInfo = (data: any) => {
    setGroupPage(data);
  };

  return (
    <MainContext.Provider
      value={{ isRouted, defineRoutedState, groupPage, definePageInfo }}
    >
      {children}
    </MainContext.Provider>
  );
}
