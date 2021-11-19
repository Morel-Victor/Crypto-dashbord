import React from 'react';
import './App.css';
import './components/Navbar.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Markets from './pages/Markets';
import Node from './pages/Node';
import Stacking from './pages/Stacking';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/markets' component={Markets} />
          <Route path='/nodes' component={Node} />
          <Route path='/stacking' component={Stacking} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
