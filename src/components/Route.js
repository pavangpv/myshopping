import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Header from "./Header";
import { Switch } from "react-router-dom";
import Home from "./Home";
import { Cart } from "./Cart";

export default function MyRoute() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            < Header />
        <Switch>
        <Route path="/Cart">
            <Cart />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }
// function About() {
//   return <h2>About</h2>;
// }
// function Users() {
//   return <h2>Users</h2>;
// }
