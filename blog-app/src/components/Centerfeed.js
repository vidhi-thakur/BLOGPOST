import React, {useState, useEffect} from 'react';
import "./Centerfeed.css";
import { useStateValue } from '../StateProvider';
import Createblog from "./Createblog"
import Blogs from "./Blogs.js"
import db from "../firebase"

function Centerfeed() {

    const [ {user}, dispatch] = useStateValue();
    const [blogs, setBlogs] = useState([]);

    //db stuff

    useEffect(() => {

        db.collection("blogs").orderBy("timestamp", "desc").onSnapshot(snapshot => (setBlogs(snapshot.docs.map((doc)=> ({ id: doc.id,
            data: doc.data()
        }))))
        );
    }, []);

    // orderBy("timestamp", "desc").

    return (
        <div className="feed">

            <Createblog profilePic={user.photoURL} name={user.displayName} />

            {
                blogs.map(blogs => (
                <Blogs key={blogs.id} profilePic={blogs.data.profilePic} img={blogs.data.imageUrl} name={blogs.data.name} title={blogs.data.title} input={blogs.data.inputTextarea} timestamp={blogs.data.timestamp} />
                ))
            }

            <Blogs profilePic={user.photoURL} name={user.displayName} img="https://media-exp3.licdn.com/dms/image/C561BAQFGwG_I_yubDA/company-background_10000/0/1519798679721?e=2159024400&v=beta&t=NZ_SyDW_YDs1cNdohA56e9bbg1N2MnP_co4wYZf55iY"  title="WOW this works!" input="IMG, originally known as the International Management Group, is a global sports, events and talent management company headquartered in New York City. It has been owned by Endeavor and Silver Lake Partners since 2013. Trans World International is the event company of IMG." />
        </div>
    )
}

export default Centerfeed;
