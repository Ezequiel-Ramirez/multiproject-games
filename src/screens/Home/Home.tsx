import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "nes.css/css/nes.min.css";

const Home = () => {
    return (
        <div className="container" style={{ backgroundColor: "#242424" }}>
            <div>
                <Link to="/memotest" style={{ marginRight: "10px" }}>
                    <button type="button" className="nes-btn  is-primary">
                        Memotest
                    </button>
                </Link>
                <Link to="/pokemon" style={{ marginRight: "10px" }}>
                    <button type="button" className="nes-btn is-success">
                        Pokemon
                    </button>
                </Link>
                <Link to="/wpm">
                    <button type="button" className="nes-btn is-warning">
                        Words Per Minute
                    </button>
                </Link>
            </div>
            <div className="social-buttons">
                <Link to="mailto:ezequielram@gmail.com" className="social-btn " target="_blank">
                    <i className="nes-icon gmail is-large"></i>
                </Link>

                <Link
                    to="https://www.instagram.com/eeezzzeee10/"
                    className="social-btn "
                    target="_blank"
                >
                    <i className="nes-icon instagram is-large"></i>
                </Link>

                <Link
                    to="https://github.com/Ezequiel-Ramirez"
                    className="social-btn "
                    target="_blank"
                >
                    <i className="nes-icon github is-large"></i>
                </Link>

                <Link
                    to="https://www.linkedin.com/in/ezequiel-e-ramirez/"
                    className="social-btn "
                    target="_blank"
                >
                    <i className="nes-icon linkedin is-large"></i>
                </Link>
            </div>
        </div>
    );
};

export default Home;
