import { GlobalStyle } from './GlobalStyle';
import Navbar from './components/Navbar/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Markets from './pages/Markets.jsx';
import Node from './pages/Node.jsx';
import Stacking from './pages/Stacking.jsx';

export default function App() {
  return (
    <>
      <GlobalStyle />
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
