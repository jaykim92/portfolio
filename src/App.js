import React from "react";
import "./App.css";

// import page components
import Front from './pages/front';

//import react-router-dom one time at the very top level
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Front />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
