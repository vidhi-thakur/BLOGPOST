import React from 'react'
import "./Home.css";
import Leftsidebar from "./Leftsidebar.js";
import Centerfeed from "./Centerfeed.js"


function Home() {
    return (
        <div className="home">
            < Leftsidebar />

            {/* centre feed  */}
            <Centerfeed />

            {/* sidebar right  */}

        </div>
    );
}

export default Home;