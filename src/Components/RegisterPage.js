import React from 'react'
import { Link } from 'react-router-dom'

import './Register.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Register</h2>
            
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                
                
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Member Login</Link>.</p>
            </footer>
        </div>
    )

}
