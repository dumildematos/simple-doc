import React from 'react';
import './App.global.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { MainContextProvider } from './contexts/MainContext';

const hasValidToken = true;

export default function App() {
  if (!hasValidToken) {
    return <Login />;
  }
  return (
    <MainContextProvider>
      <Home />
    </MainContextProvider>
  );
}
