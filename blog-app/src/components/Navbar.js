import React, {useState} from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    const [click, setClick] = useState(false);
    const onClickHandler = () => setClick(!click);

    return (
        <header className="nav-header"> 
            <div className="heading-container">
                <Link to="/" className="nav-heading">Blog Post.</Link>
            </div>
            <div class="list-container">
                <ul className="nav-icons">
                    <li className="nav-links">
                        <Link to="/"><i className="fas fa-home"></i></Link>
                    </li>
                 <li className="nav-links">
                        <Link to="/categouries/"><i className="fas fa-compass"></i></Link>
                 </li>
                    <li className="nav-links">
                        <Link to="/notifications/"><i className="fas fa-bell"></i></Link>
                    </li>
                    <li className="nav-links">
                        <Link to="/account/"><i className="fas fa-user"></i></Link>
                    </li>
                </ul>
            </div>

            
        </header>
    );
}

export default Navbar;