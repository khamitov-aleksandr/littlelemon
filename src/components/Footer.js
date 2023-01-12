import "./styles.css";
import React from 'react'

function Footer() {
  return (
    <footer>
      <img href="Foto.png" alt="restaurant"/>
      <nav>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#menu'>Menu</a></li>
            <li><a href='#reservations'>Reservations</a></li>
            <li><a href='#orderonline'>Order Online</a></li>
            <li><a href='#login'>Login</a></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li><a href='https://www.instagram.com/'>instagram</a></li>
            <li><a href='https://www.facebook.com/'>facebook</a></li>
            <li><a href='https://twitter.com/'>twitter</a></li>
            <li><a href="https://www.pinterest.com/" role="button">pinterest</a></li>
          </ul>
        </nav>
    </footer>
  )
}

export default Footer;