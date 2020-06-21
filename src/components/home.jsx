import React, {Component} from "react";
import logo from "./logo.png";

class Home extends Component {


    render() {
        return (
            <div className="container h-75 justify-content-center align-items-center d-flex flex-column">
                <img src={logo} alt="Logo"/>
                <form className="mt-n5">
                    <div className="form-group ">
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Password"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Home;