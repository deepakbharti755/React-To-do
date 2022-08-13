import React from 'react'
import { Link } from 'react-router-dom'

import './Login.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Member Login</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <Link to="/todo">
                    <button id="sub_btn" type="submit">Login</button>
                    </Link>
                </p>
            </form>
            <footer>
            <Link to="/forget-password"><label className="">Forget password?</label></Link><br/>
            <Link to="/register"><label className="">Register</label></Link>
            </footer>
        </div>
    )
}
