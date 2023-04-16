import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '.././assets/logo.png'
import '.././styles/Nav.css'

export default function Nav() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img
                        width="100 px"
                        height="100 px"
                        className="img-responsive"
                        src={Logo}
                        alt="logo"
                    />
                </Link>
            </div>
            <ul className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/Screen1">Screen1</Link>
                <Link to="/about">About</Link>
            </ul>
        </div>
    )
}
