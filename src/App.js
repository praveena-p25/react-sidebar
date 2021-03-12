
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Team from './pages/Team';



function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/reports' component={Reports} />
      <Route path='/products' component={Products} />
      <Route path='/team' component={Team} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
