// Import
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
    
    const location = window.location.pathname;

        return (
            <div id="nav">
                {location !== "/dashboard" && <Button><Link to={location === "/" ? "/signup" : "/"}>{location === "/" ? "Inscription" : "Se connecter"}</Link></Button>}
            </div>
        )
}

export default Nav;