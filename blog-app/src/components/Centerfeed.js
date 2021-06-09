import React from 'react';
import "./Centerfeed.css";
import { Link } from "react-router-dom";
import SentimentSatisfiedRoundedIcon from '@material-ui/icons/SentimentSatisfiedRounded';
import { useStateValue } from '../StateProvider';

function Centerfeed() {

    const [ {user}, dispatch] = useStateValue();

    return (
        <div className="feed">
            <div className="feed__writeBlog">
                <SentimentSatisfiedRoundedIcon />
                <Link to="/create-blog/" image={user.photoURL} title={user.displayName}>Start writing a blog...</Link>
            </div>
        </div>
    )
}

export default Centerfeed;
