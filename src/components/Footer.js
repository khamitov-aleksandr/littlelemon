import "./styles.css";
import { ReactComponent as Instagram } from '../assets/instagram.svg';
import { ReactComponent as Facebook } from '../assets/facebook.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';
import { ReactComponent as Pinterest } from '../assets/pinterest.svg';
import React from 'react';
import footerlogo from '../assets/footerlogo.png';
import { Link } from 'react-router-dom';

function Footer() {

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <footer>
        <img
        src={footerlogo}
        alt="footer-logo"
        />
        <nav>
          <ul>
            <li><Link to="/" onClick={handleScrollToTop}>Home</Link></li>
            <li><Link to="/about" onClick={handleScrollToTop}>About</Link></li>
            <li><Link to="/menu" onClick={handleScrollToTop}>Menu</Link></li>
            <li><Link to="/reservations" onClick={handleScrollToTop}>Reservations</Link></li>
            {/* <li><Link to="/order-online" onClick={handleScrollToTop}>Order Online</Link></li> */}
            <li><Link to="/login" onClick={handleScrollToTop}>Login</Link></li>
            <li><Link to="/feedback" onClick={handleScrollToTop}>Feedback</Link></li>
          </ul>
        </nav>
        <nav>
          <ul>
              <h5 className="footer-contact">Contact</h5>
              <li><i>Adress:</i> P.za Dante, 57, 80134 Napoli NA, Italy</li>
              <li><i>Phone number:</i> +00 (0) 0-00-00-00-00</li>
              <li><i>Email:</i> little.lemon@gmail.com</li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/" role="button" alt="Instagram"><Instagram /></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/" role="button" alt="Facebook"><Facebook /></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://twitter.com/" role="button" alt="Twitter"><Twitter /></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.pinterest.com/" role="button" alt="Pinterest"><Pinterest /></a></li>
          </ul>
        </nav>
    </footer>
  )
}

export default Footer;