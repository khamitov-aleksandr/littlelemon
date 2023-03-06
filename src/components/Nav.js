import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
    <>
        <nav className="nav" id="menu">
            <ul>
                <li><NavLink to="/" className="nav-item">Home</NavLink></li>
                <li><NavLink to="/about" className="nav-item">About</NavLink></li>
                <li><NavLink to="/menu" className="nav-item">Menu</NavLink></li>
                <li><NavLink to="/reservations" className="nav-item">Reservations</NavLink></li>
                <li><NavLink to="/order-online" className="nav-item">Order Online</NavLink></li>
                <li><NavLink to="/login" className="nav-item">Login</NavLink></li>
                <li><NavLink to="/feedback">Feedback</NavLink></li>
            </ul>
        </nav>
    </>
  )
}