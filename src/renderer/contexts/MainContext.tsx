import React, { useState, createContext, ReactNode, useEffect } from 'react';

type GroupPage = {
  id: number;
  title: string;
};

type Page = {
  isRouted: boolean;
  groupPage: any;
  editorOpened: boolean;
  defineRoutedState: (state: boolean) => void;
  definePageInfo: (data: any) => void;
  definedEditorIsOpened: (state: boolean) => void;
};

type Node = {
  children: ReactNode;
};

export const MainContext = createContext({} as Page);

export function MainContextProvider({ children }: Node) {
  const [isRouted, setRouted] = useState(false);
  const [groupPage, setGroupPage] = useState({});
  const [editorOpened, setOpenedEditor] = useState(false);

  useEffect(() => {}, [editorOpened]);

  const defineRoutedState = (state: boolean) => {
    setRouted(state);
  };

  const definePageInfo = (data: any) => {
    setGroupPage(data);
  };

  const definedEditorIsOpened = (state: boolean) => {
    setOpenedEditor(state);
  };

  return (
    <MainContext.Provider
      value={{
        isRouted,
        defineRoutedState,
        groupPage,
        definePageInfo,
        editorOpened,
        definedEditorIsOpened,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
