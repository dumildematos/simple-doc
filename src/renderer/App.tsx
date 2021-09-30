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
  bgContent: '#D9E6F6',
  navBg: '#5292C1',
  titleColor: '#dc658b',
  tagLineColor: '#fff',
  textColor: '#000',
  boxBorder: 'none',
  boxBg: '#fff',
  secundaryColor: '#fff',
};
const DarkTheme = {
  bgContent: '#000000',
  navBg: '#000000',
  titleColor: 'lightpink',
  tagLineColor: 'lavender',
  boxBorder: '1px solid #D81D99',
  textColor: '#D81D99',
  boxBg: '#15181D',
  secundaryColor: '#D81D99',
};

const themes: any = {
  light: LightTheme,
  dark: DarkTheme,
};

const GlobalStyle = createGlobalStyle``;

export default function App() {
  const { editorOpened, isRouted } = useContext(MainContext);
  const [theme, setTheme] = useState('light');
  if (!hasValidToken) {
    return <Login />;
  }
  return (
    <MainContextProvider>
      {/* <Home /> */}
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={themes[theme]}>
        <Router>
          <Switch>
            <Route exact path={['/index.html', '/', '/group/:id']}>
              {!isRouted && !editorOpened ? (
                <Home />
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
