import React from 'react';
import "./Createblog.css";
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FontDownloadRoundedIcon from '@material-ui/icons/FontDownloadRounded';
import SentimentSatisfiedRoundedIcon from '@material-ui/icons/SentimentSatisfiedRounded';

function Createblog() {
    return (
        <div className="createBlog">
            <div className="createBlog__header">
                <h2>Create blog</h2>
            </div >
            <div className="createBlog__info">
                <AccountCircleIcon className="createBlogInfo--icon" />
                <div className="createBlog__userInfo">
                    <h4>Name</h4>
                    <button>Blog type</button>
                </div>
                
            </div>
            <div>
                <form className="createBlog__input">
                    <textarea className="input--blog" placeholder="Write your blog here..." required></textarea>
                    <div className="createBlog__button">
                        <input placeholder="Add image URL (optional)" />
                        <button className="button--input" type="submit">Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Createblog;
