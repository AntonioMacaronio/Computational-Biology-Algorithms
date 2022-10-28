import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import BurrowWheeler from './BurrowWheeler';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="geneContent">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/burrow-wheeler">
            <BurrowWheeler />
          </Route>
        </Switch>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
