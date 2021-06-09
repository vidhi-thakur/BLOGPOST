import React, {useState} from 'react';
import "./Createblog.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Createblog({image, title}) {

    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleOnClick = (event) => {
        event.preventDefault();

        setImageUrl("")
        setInput("")
    }

    return (
        <div className="createBlog">
            <div className="createBlog__header">
                <h2>Create blog</h2>
            </div >
            <div className="createBlog__info">
                <AccountCircleIcon src={image} className="createBlogInfo--icon" />
                <div className="createBlog__userInfo">
                    <h4>{!title?"Guest":title}</h4>
                    <button>Blog type</button>
                </div>
                
            </div>
            <div>
                <form className="createBlog__input">
                    <textarea onClick={(e) => setInput(e.target.value)} className="input--blog" placeholder="Write your blog here..." required></textarea>
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
