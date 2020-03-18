import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component="books" />
          <Route exact path="/books" component="books" />
          <Route exact path="/books/:id" component="detail" />
        </Switch>
        <Books />
      </div>
    </Router>
  );
}

export default App;
