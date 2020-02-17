import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/Navigation";
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Login} />
    </div>
  );
}

export default App;
