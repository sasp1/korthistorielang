import React, {Component} from "react";
import logo from "./logo.png";
import http from "../services/httpService";
import PropTypes from 'prop-types';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: "",
            error: undefined
        };
    }

    handleChange = ({currentTarget: input}) => {
        this.setState({password: input.value, error: ""});
    };

    render() {
        const {error, password} = this.state;
        return (
            <div className="container h-75 justify-content-center align-items-center d-flex flex-column">
                <img src={logo} alt="Logo"/>
                <form className="mt-n5" onSubmit={this.handleSubmit}>
                    <div className="form-group ">
                        <input type="password" className="form-control" placeholder="Password"
                               onChange={this.handleChange} value={password}/>
                    </div>
                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                    <button id="signin" className="btn btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
        );
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {password} = this.state;
        try {
            const res = await http.post("/todos/", {});
            console.log("data", res.data);
        } catch (e) {
            console.log("error data", e.response.data);
        }
        this.props.onLogin();
    }
}

Login.propTypes = {
    onLogin: PropTypes.func.isRequired
};

export default Login;