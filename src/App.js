import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom"
import Login from "./components/login";
import Home from "./components/home";



function App() {
  return (
    <div className="App container h-100">
        <Switch>
          <Route path={ "/login"} render={() => <Login />}/>
          <Route path={ "/"} exact render={() => <Home />}/>
          <Redirect to={ "/not-found"}/>
        </Switch>
    </div>
  );
}

export default App;
