import React from 'react';
import "./Login.css";
import { auth, provider } from "../firebase.js";
import { useStateValue } from '../StateProvider';
import { actionTypes } from "../reducer.js";

function Login() {

    const [state, dispatch] = useStateValue();

    const onClickHandler = ()=> {
        auth.signInWithPopup(provider).then((result) => {
            
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch(error => alert("Something wrong happned! Try again."))
    }

    return (
        <div className="OuterLogin">
            <div className="Login">
            <div className="Login__logo">
                bp.
            </div>
            <h2>Welcome to Blogpost.</h2>
            <button type="submit" onClick={onClickHandler}>
                Sign In
            </button>
        </div>
        </div>
    )
}

export default Login;
