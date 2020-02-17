import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Navigation";
import Login from "./components/Login";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <ProtectedRoute exact path="/protected" component={Home} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
