import React, {useState} from 'react';
import "./Createblog.css";
import { Avatar } from '@material-ui/core';
import firebase from "../firebase"

function Createblog({profilePic, name}) {

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleOnClick = (event) => {
        event.preventDefault();

        //clever db stuff
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();

        setImageUrl("")
        setInput1("")
        setInput2("")
    }

    return (
        <div className="createBlog">
            <div className="createBlog__header">
                <h2>Create blog</h2>
            </div >
            <div className="createBlog__info">
                <Avatar src={profilePic} className="createBlogInfo--icon" />
                <div className="createBlog__userInfo">
                    <h4>{!name?"Guest":name}</h4>
                </div>
                
            </div>
            <div>
                <form className="createBlog__input">
                    <input onClick={(e) => setInput2(e.target.value)} placeholder="Enter title" required />
                    <textarea onClick={(e) => setInput1(e.target.value)} className="input--blog" placeholder="Write your blog here..." required></textarea>
                    <div className="createBlog__button">
                        <input onClick={(e) => setImageUrl(e.target.value)} placeholder="Add image URL (optional)" />
                        <button onClick={handleOnClick} className="button--input" type="submit">Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Createblog;
