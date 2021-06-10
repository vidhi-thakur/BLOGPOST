import React from 'react';
import "./Centerfeed.css";
import { Link } from "react-router-dom";
import SentimentSatisfiedRoundedIcon from '@material-ui/icons/SentimentSatisfiedRounded';
import { useStateValue } from '../StateProvider';
import Createblog from "./Createblog"
import Blogs from "./Blogs.js"

function Centerfeed() {

    const [ {user}, dispatch] = useStateValue();

    return (
        <div className="feed">

            <Createblog profilePic={user.photoURL} name={user.displayName} />

            <Blogs profilePic={user.photoURL} name={user.displayName} img="https://media-exp3.licdn.com/dms/image/C561BAQFGwG_I_yubDA/company-background_10000/0/1519798679721?e=2159024400&v=beta&t=NZ_SyDW_YDs1cNdohA56e9bbg1N2MnP_co4wYZf55iY" timestamp="timestamp..." title="WOW this works!" input="IMG, originally known as the International Management Group, is a global sports, events and talent management company headquartered in New York City. It has been owned by Endeavor and Silver Lake Partners since 2013. Trans World International is the event company of IMG." />
        </div>
    )
}

export default Centerfeed;
