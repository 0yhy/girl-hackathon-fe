import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Index from "./pages/index/index";
import Task from "./pages/task/task";
import Add from "./pages/add/add";
import Edit from "./pages/edit/edit";
import Detail from "./pages/detail/detail";
import Toast from "./components/toast/toast";

function App() {
  const [toastText, setToastText] = useState("");
  const [toastStyle, setToastStyle] = useState({});
  const showToast = (text, timeout = 1500) => {
    setToastText(text);
    setToastStyle({ display: "flex" });
    setTimeout(() => {
      setToastStyle({ display: "none" });
    }, timeout);
  };
  return (
    <div className="App">
      <Toast text={toastText} style={toastStyle} />
      <Router>
        <Route path="/index" component={Index} />
        {/* <Route path="/" render={() => <Redirect to="index" />} /> */}
        <Route path="/task/:date" component={Task} />
        <Route path="/add" render={() => <Add showToast={showToast} />} />
        <Route path="/edit" render={() => <Edit showToast={showToast} />} />
        <Route path="/detail" render={() => <Detail showToast={showToast} />} />
      </Router>
    </div>
  );
}

export default App;
