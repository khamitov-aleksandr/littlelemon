import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import Reservations from '../pages/Reservations';
import OrderOnline from '../pages/OrderOnline';
import Login from '../pages/Login';

export default function Nav() {
    return (
    <>
        <nav className="nav">
            <ul>
                <li><Link to="/" className="nav-item">Home</Link></li>
                <li><Link to="/about" className="nav-item">About</Link></li>
                <li><Link to="/menu" className="nav-item">Menu</Link></li>
                <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
                <li><Link to="/order-online" className="nav-item">Order Online</Link></li>
                <li><Link to="/login" className="nav-item">Login</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/menu" element={<Menu/>}></Route>
            <Route path="/reservations" element={<Reservations/>}></Route>
            <Route path="/order-online" element={<OrderOnline/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </>
  )
}