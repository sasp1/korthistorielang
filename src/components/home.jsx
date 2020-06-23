import React, {Component} from "react";
import logo from "./logo.png";
import {Redirect} from "react-router-dom";
import PropTypes from 'prop-types';




const Home = props => {
    if (!props.loggedIn)
        return <Redirect to="/login"/>;

    return (
        <div className="noOpacity">
            {/*<Modal body="feedback" okButtonText="Download feedback"/>*/}
        </div>
    );
};

Home.propTypes = {
    loggedIn: PropTypes.bool.isRequired
};

export default Home;