import React, { useContext } from 'react';
import './App.global.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { MainContext, MainContextProvider } from './contexts/MainContext';
import Editor from './pages/Editor/Editor';

const hasValidToken = true;

export default function App() {
  const { editorOpened } = useContext(MainContext);

  if (!hasValidToken) {
    return <Login />;
  }
  return (
    <MainContextProvider>
      <Home />
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router> */}
    </MainContextProvider>
  );
}
