import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Home from './Home/Home';
import Login from './Login/Login';

const hasValidToken = true;

export default function App() {
  if (!hasValidToken) {
    return <Login />;
  }
  return (
    <Router>
      {/* <Switch>
          <Route path="/" component={Hello} />
        </Switch> */}
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
