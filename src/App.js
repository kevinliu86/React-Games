import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './SideBar2';
import Snek from './Snek';
import Tower from './Tower';
import Tictac from './Tictac';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="body">
        <SideBar />
        <Body />
        <Footer />
      </div>
    </Router>
  );
}
function Body () {
  return (
    <Switch>
      <Route exact path='/home'>
        <Home />
      </Route>
      <Route path='/tictactoe'>
        <Tictac />
      </Route>
      <Route path='/tower'>
        <Tower />
      </Route>
      <Route path='/snek'>
        <Snek />
      </Route>
      <Route exact path='/'>
      </Route>
      <Route path='/'>
        Sorry, I couldn't find that page.
      </Route>
    </Switch>
  );
}
export default App;
