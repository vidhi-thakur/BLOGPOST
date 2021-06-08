import React from 'react';
import Trendingblog from "./Trendingblog.js";
import "./Leftsidebar.css";

function Leftsidebar() {
    return (
        <div className="leftsidebar">
            <h3 className="leftsidebar__heading">Trending..</h3>
            <div className="leftsidebar__blogContainer">
                <Trendingblog className="leftsidebar__blog" image="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270" src="/account/" title="trending blog 1"/>
                <Trendingblog className="leftsidebar__blog" image="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg" src="/notifications/" title="trending blog 2"/>
            </div>
        </div>
    )
}

export default Leftsidebar
