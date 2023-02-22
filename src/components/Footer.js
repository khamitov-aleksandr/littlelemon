import "./styles.css";
import { ReactComponent as Instagram } from '../assets/instagram.svg';
import { ReactComponent as Facebook } from '../assets/facebook.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';
import { ReactComponent as Pinterest } from '../assets/pinterest.svg';
import React from 'react';
import restaurantchef from '../assets/restaurantchef.jpg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <img
      src={restaurantchef}
      alt="restaurant chef"
      />
      <nav>
        <ul>
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/about" className="nav-item">About</Link></li>
          <li><Link to="/menu" className="nav-item">Menu</Link></li>
          <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
          <li><Link to="/order-online" className="nav-item">Order Online</Link></li>
          <li><Link to="/login" className="nav-item">Login</Link></li>
        </ul>
      </nav>
      <nav>
        <ul>
          <h5>Contact</h5>
            <li><i>Adress:</i> P.za Dante, 57, 80134 Napoli NA, Italy</li>
            <li><i>Phone number:</i> +00 (0) 0-00-00-00-00</li>
            <li><i>Email:</i> little.lemon@gmail.com</li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li><a href="https://www.instagram.com/" role="button" alt="Instagram"><Instagram /></a></li>
          <li><a href="https://www.facebook.com/" role="button" alt="Facebook"><Facebook /></a></li>
          <li><a href="https://twitter.com/" role="button" alt="Twitter"><Twitter /></a></li>
          <li><a href="https://www.pinterest.com/" role="button" alt="Pinterest"><Pinterest /></a></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;