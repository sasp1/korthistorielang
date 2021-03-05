import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom"
import Login from "./components/login";
import Home from "./components/home";

class App extends Component {


    onLogin = () => {
        console.log("HEEEEJ")
        this.props.history.replace("/");
    }

    render(){
        return (
            <div className="App container h-100">
                <Switch>
                    <Route path={"/login"} render={() => <Login onLogin={this.onLogin}/>}/>
                    <Route path={"/"} exact render={() => <Home loggedIn={false}/>}/>
                    <Redirect to={"/not-found"}/>
                </Switch>
            </div>
        );
    }

}
export default App;
