import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Index from "./pages/index/index";
import Task from "./pages/task/task";
import Add from "./pages/add/add";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/index" component={Index} />
        {/* <Route path="/" render={() => <Redirect to="index" />} /> */}
        <Route path="/task/:date" component={Task} />
        <Route path="/add" component={Add} />
      </Router>
    </div>
  );
}

export default App;
