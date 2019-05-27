import React from "react";
import "./App.css";
import CompTest from "./components/comps/comp";
import PropTest from "./components/props/prop";
import StateTest from "./components/states/state";
import InforPage from "./components/router/infor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  var user = {
    name: "Takahashi Hanako",
    age: 22
  };
  return (
    <div className="App">
      <CompTest />
      <PropTest user={user} />
      <StateTest />
      <Router path="/infor" component={InforPage} />
    </div>
  );
}
export default App;
