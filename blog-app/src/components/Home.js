import React from 'react'
import "./Home.css";
import Leftsidebar from "./Leftsidebar.js";
import Centerfeed from "./Centerfeed.js"
import Rightsidebar from "./Rightsidebar.js"


function Home() {
    return (
        <div className="home">
            < Leftsidebar />

            <Centerfeed />
            
            <Rightsidebar />
        </div>
    );
}

export default Home;