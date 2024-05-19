import * as React from "react";
import { Link } from "react-router-dom";
import './Login.css';

export default function Login() {

    const handelclick = () => {
     window.location.assign('localhost:3000/Products')
    };

    return (
        <>
            <form  className="box">
                <h1>Login</h1>
                <h5 className="text-success" style={{letterSpacing:'2px'}}>Please enter your login and password!</h5>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <a className="forgot text-secondary" href="/">Forgot password?</a>
                <Link className="btn btn-outline-success bg-success" style={{height:'50px'}} onClick={handelclick} to={'/'}>LogIn</Link>
            </form>
        </>
    );
}
