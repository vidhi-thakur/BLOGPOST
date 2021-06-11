import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Blogs.css"

function Blogs({profilePic, img, name, timestamp, title, input}) {
    return (
        <div className="blog">
            <div className="blog__userInfo">
                <Avatar src={profilePic} className="blog__userImage" />
                <div className="blog__userName">
                    <h4 className="marginClass userName">{!name?"Guest":name}</h4>
                    <h4 className="marginClass blog__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</h4>
                </div>
            </div>
            <div className="blog__userInput">
                <h3 className="blog__leftMargin">{title}</h3>
                <img src={img} />
                <p className="blog__leftMargin">{input}</p>
            </div>
        </div>
    )
}

export default Blogs
// {new Date(timestamp?.toDate()).toUTCString()}