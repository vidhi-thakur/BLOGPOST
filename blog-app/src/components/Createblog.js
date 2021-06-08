import React from 'react';
import "./Createblog.css";
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FontDownloadRoundedIcon from '@material-ui/icons/FontDownloadRounded';

function Createblog() {
    return (
        <div className="createBlog">
            <div className="createBlog__header">
                <h2>Create blog</h2>
                <ClearRoundedIcon />
                
            </div >
            <div className="createBlog__info">
                <AccountCircleIcon />
                <div className="createBlog__userInfo">
                    <h4>Name</h4>
                    <button></button>
                </div>
                
            </div>
            <div className="createBlog__input">
                <form>
                    <textarea placeholder="Write your blog here..."></textarea>
                    <input placeholder="Add image/gif URL" />
                </form>

            </div>
            <div className="createBlog__icons">
            <FontDownloadRoundedIcon/ >
            </div>
            <div className="createBlog__button">

            </div>
        </div>
    )
}

export default Createblog
