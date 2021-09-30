import React, { useContext, useEffect, useState } from 'react';
import './App.global.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { MainContext, MainContextProvider } from './contexts/MainContext';
import EditableDocPage from './pages/EditableDocPage/EditableDocPage';

const hasValidToken = true;

const LightTheme = {
  boxBg: '#D9E6F6',
  bgContent: 'red',
  navBg: '#fff',
  siteLayoutContainer: 'inherit',

  bgSidebar: '#f7f6f3',

  cardBg: 'inherit',
  cardBorderColor: 'none',
  cardInnerBorderColor: 'none',
  cardTexColor: 'inherit',

  cardGroupBg: '#fff',

  modalAddGroupBg: '#fff',
  modalBgInput: '#fff',
  modalInputColor: '#000',
  modalInputBorder: '1px solid #f0f0f0',

  titleColor: '#dc658b',
  tagLineColor: '#fff',
  textColor: '#000',
  boxBorder: 'none',
  secundaryColor: '#fff',
};
const DarkTheme = {
  boxBg: '#15181D',
  bgContent: '#000000',
  navBg: '#18191C',
  siteLayoutContainer: '#232426',

  bgSidebar: '#4c5fe1',

  cardBg: '#232426',
  cardBorderColor: '#232426',
  cardInnerBorderColor: '#2f3133',
  cardTexColor: '#bdbdbd',

  cardGroupBg: '#18191C',

  modalAddGroupBg: '#18191C',
  modalBgInput: '#111214',
  modalInputColor: '#bdbdbd',
  modalInputBorder: 'none',

  titleColor: 'lightpink',
  tagLineColor: 'lavender',
  boxBorder: '1px solid #D81D99',
  textColor: '#D81D99',
  secundaryColor: '#D81D99',
};

const themes: any = {
  light: LightTheme,
  dark: DarkTheme,
};

const GlobalStyle = createGlobalStyle``;

export default function App() {
  const { editorOpened, isRouted, theme } = useContext(MainContext);
  const [Apptheme, setTheme] = useState('light');
  // console.log(isRouted);
  if (!hasValidToken) {
    return <Login />;
  }
  return (
    <MainContextProvider>
      {/* <Home /> */}
      <GlobalStyle theme={Apptheme} />
      <ThemeProvider theme={themes[Apptheme]}>
        <Router>
          <Switch>
            <Route exact path={['/index.html', '/', '/group/:id']}>
              {!isRouted && !editorOpened ? (
                <Home theme={theme} />
              ) : (
                <Redirect to="/page-doc/:id" />
              )}
            </Route>
            {/* {editorOpened && (
            )} */}
            <Route path="/page-doc/:id" component={EditableDocPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </MainContextProvider>
  );
}
