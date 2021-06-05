import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <Link to="/" className="BlogPost">Blog Post.</Link>
            <ul>
                <li class="nav-links">
                    <Link to="/"><i className="fas fa-home"></i></Link>
                </li>
                <li class="nav-links">
                    <Link to="/categouries/"><i className="fas fa-compass"></i></Link>
                </li>
                <li class="nav-links">
                    <Link to="/notifications/"><i className="fas fa-bell"></i></Link>
                </li>
                <li class="nav-links">
                    <Link to="/account/"><i className="fas fa-user"></i></Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;