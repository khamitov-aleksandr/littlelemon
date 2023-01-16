import "./styles.css";
import { ReactComponent as Instagram } from './instagram.svg';
import { ReactComponent as Facebook } from './facebook.svg';
import { ReactComponent as Twitter } from './twitter.svg';
import { ReactComponent as Pinterest } from './pinterest.svg';
import React from 'react'

function Footer() {
  return (
    <footer>
      <img href="Foto.png" alt="restaurant"/>
      <nav>
        <h5>Doormat Nav igation</h5>
          <ul>
            <li><a href='#home' role="button">Home</a></li>
            <li><a href='#about' role="button">About</a></li>
            <li><a href='#menu' role="button">Menu</a></li>
            <li><a href='#reservations' role="button">Reservations</a></li>
            <li><a href='#orderonline' role="button">Order Online</a></li>
            <li><a href='#login' role="button">Login</a></li>
          </ul>
        </nav>
        <nav>
          <h5>Doormat Nav igation</h5>
          <ul>
            <li><a href='https://www.instagram.com/' role="button">Adress</a></li>
            <li><a href='https://www.facebook.com/' role="button">Phone number</a></li>
            <li><a href='https://twitter.com/' role="button">email</a></li>
            <li><a href="https://www.pinterest.com/" role="button">pinterest</a></li>
          </ul>
        </nav>
        <nav>
        <h5>Social media links</h5>
          <ul>
            <li><a href="https://www.instagram.com/" role="button"><Instagram /></a></li>
            <li><a href="https://www.facebook.com/" role="button"><Facebook /></a></li>
            <li><a href="https://twitter.com/" role="button"><Twitter /></a></li>
            <li><a href="https://www.pinterest.com/" role="button"><Pinterest /></a></li>
          </ul>
        </nav>
    </footer>
  )
}

export default Footer;