import React from 'react';
import "./Centerfeed.css";
import { Link } from "react-router-dom";
import SentimentSatisfiedRoundedIcon from '@material-ui/icons/SentimentSatisfiedRounded';

function Centerfeed() {
    return (
        <div className="feed">
            <div className="feed__writeBlog">
                <SentimentSatisfiedRoundedIcon />
                <Link to="/create-blog/">Start writing a blog...</Link>
            </div>
        </div>
    )
}

export default Centerfeed;
