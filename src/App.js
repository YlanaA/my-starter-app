 import logo from './logo.svg';
import './App.css';
import Welcome from "./Components/Welcome/Welcome"
import Clock from './Components/Clock/Clock.js'
import Contact from "./Components/Contact/Contact.js"
import { Route, Switch } from "react-router-dom"
import Navigation from './Components/Navigation/Navigation';
import Jeopardy from "./Components/Jeopardy/Jeopardy";

import NotFound from "./Components/NotFound/NotFound";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
      <Route 
        exact 
        path="/" 
        render={ (...props) => <Welcome name="Lana" /> }
         />
      <Route path='/clock' component={Clock} />
      <Route path="/contact" component={Contact} />
      <Route path="/welcome/:name" component={Welcome} />
      <Route path="/jeopardy" component={Jeopardy } />
      <Route><div>404</div></Route>
      

      </Switch>
      
    </div>
  );
}

export default App;
