import React from 'react';
import { Link } from "react-router-dom";
import "./Trendingblog.css"

function Trendingblog({image, title, src}) {
    return (
        <div className="container">
            <img src={image} alt="blogImage" />
            <h4 className="container__heading">{title}</h4>
            <Link className="container__link" to={src}>read blog</Link>
        </div>
    )
}

export default Trendingblog;
