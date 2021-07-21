import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Fullpage from './Components/Fullpage/Fullpage';
import HouseDetails from "./Components/HouseDetails/HouseDetails";
export const UserContext = createContext();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Fullpage />
        </Route>
        <Route path="/houses/:id">
            <HouseDetails/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
