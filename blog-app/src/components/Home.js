import React from 'react'
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
    return (
        <div className="Home-body">
            <div className="container container-side">
                <h2 className="displayBlog-heading">Also check</h2>
                <div className="display-blog">
                    <h3 className="blog-heading">first heading</h3>
                    <small>Jume 6, 2021</small>
                    <p className="blog-Para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt ut neque vel interdum. Sed a porttitor purus. Integer varius, tortor sit amet venenatis eleifend, justo nibh pharetra nibh, in feugiat ex dolor in quam. Nunc id suscipit erat, nec auctor dui. Morbi efficitur mauris vel nunc pulvinar vestibulum. Ut sodales libero sed leo feugiat, facilisis bibendum nisl sodales.</p>
                </div>
                <div className="display-blog">
                    <h3 className="blog-heading">second heading</h3>
                    <small>Jume 6, 2021</small>
                    <p className="blog-Para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt ut neque vel interdum. Sed a porttitor purus. Integer varius, tortor sit amet venenatis eleifend, justo nibh pharetra nibh, in feugiat ex dolor in quam. Nunc id suscipit erat, nec auctor dui. Morbi efficitur mauris vel nunc pulvinar vestibulum. Ut sodales libero sed leo feugiat, facilisis bibendum nisl sodales.</p>
                </div>
            </div>
            <div className="container container-centre">
                
            </div>
            <div className="container container-side">
                <h3 className="blog-heading">Categories</h3>
            </div>
        </div>
    );
}

export default Home;