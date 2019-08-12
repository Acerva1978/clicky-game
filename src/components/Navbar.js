import React from "react";

const Navbar = (props) => {
    return (
        <div>
            <nav class="navbar shadow-lg fixed-top navbar-dark bg-dark">
                <div class="navbar-brand text-white mx-auto font-weight-bold"><h1>Clicky Game</h1></div>
                <div class="navbar-brand mx-auto text-white"><h1>Score: {props.score} | Top Score: {props.topScore} </h1></div>
                <div class="navbar-brand mx-auto text-white">{props.message} </div>
            </nav>

        </div>
    )
};

export default Navbar;