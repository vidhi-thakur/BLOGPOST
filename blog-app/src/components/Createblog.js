import React, {useState} from 'react';
import "./Createblog.css";
import { Avatar } from '@material-ui/core';
import db from "../firebase.js"
import firebase from "firebase";
import { useStateValue } from '../StateProvider';

function Createblog() {

    const [{user}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleOnClick = (event) => {
        event.preventDefault();
        //clever db stuff
        db.collection("blogs").add({
            imageUrl: imageUrl,
            inputTextarea: input,
            name: user.displayName,
            profilePic: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp() || null,
            title: title,
        })

        setImageUrl("")
        setInput("")
        setTitle("")
    }

    return (
        <div className="createBlog">
            <div className="createBlog__header">
                <h2>Create blog</h2>
            </div >
            <div className="createBlog__info">
                <Avatar src={user.photoURL} className="createBlogInfo--icon" />
                <div className="createBlog__userInfo">
                    <h4>{user?user.displayName:"Guest"}</h4>
                </div>
                
            </div>
            <div>
                <form className="createBlog__input">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" required />
                    <textarea value={input} onChange={(e) => setInput(e.target.value)} className="input--blog" placeholder="Write your blog here..." required></textarea>
                    <div className="createBlog__button">
                        <input valur={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Add image URL (optional)" />
                        <button onClick={handleOnClick} className="button--input" type="submit">Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Createblog;
