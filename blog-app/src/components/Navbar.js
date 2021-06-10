import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useStateValue } from '../StateProvider';

function Navbar() {

    const [ {user}, dispatch] = useStateValue();

    return (
        <header className="header"> 
            <div className="header__left">
                <Link to="/" className="header__heading">Blog Post.</Link>
                <div className="header__searchfield">
                    <SearchIcon className="header__searchIcon" />
                    <input className="header__input" type="text" />
                </div>
            </div>
            <div class="header__right">
                <ul className="header__icontable">
                    <li className="header__lists">
                        <Link to="/"><HomeIcon className="header__icons" /></Link>
                    </li>
                 <li className="header__lists">
                        <Link to="/categouries/"><CategoryIcon className="header__icons" /></Link>
                 </li>
                    <li className="header__lists">
                        <Link to="/notifications/"><NotificationsNoneIcon className="header__icons" /></Link>
                    </li>
                    <li className="header__lists">
                        <Link to="/account/"><Avatar src={user.photoURL} className="header__icons" /></Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;