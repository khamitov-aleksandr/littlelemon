import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
    <>
        <nav className="nav" id="menu">
            <ul>
                <li><Link to="/" className="nav-item">Home</Link></li>
                <li><Link to="/about" className="nav-item">About</Link></li>
                <li><Link to="/menu" className="nav-item">Menu</Link></li>
                <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
                <li><Link to="/order-online" className="nav-item">Order Online</Link></li>
                <li><Link to="/login" className="nav-item">Login</Link></li>
                <li><Link to="/feedback" className="nav-item">Feedback</Link></li>
            </ul>
        </nav>
    </>
  )
}