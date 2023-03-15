import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
    <>
        <nav className="nav" id="menu">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/menu" >Menu</NavLink></li>
                <li><NavLink to="/reservations">Reservations</NavLink></li>
                {/* <li><NavLink to="/order-online">Order Online</NavLink></li> */}
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/feedback">Feedback</NavLink></li>
            </ul>
        </nav>
    </>
  )
}