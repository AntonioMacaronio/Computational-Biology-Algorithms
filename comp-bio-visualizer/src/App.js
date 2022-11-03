import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import BurrowWheeler from './BurrowWheeler';
import ZAlgorithm from './ZAlgorithm';
import NeedlemanWunsch from './NeedlemanWunsch';


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
          <Route path="/zalgorithm">
            <ZAlgorithm />
          </Route>
          <Route path="/needleman-wunsch">
            <NeedlemanWunsch />
          </Route>
        </Switch>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
