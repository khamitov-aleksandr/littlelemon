import "./styles.css";
import React from 'react'

function Header() {
  return (
      <header>
          <img href="Logo.svg" alt="Logo of Little Lemon"/>
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
      </header>
  )
}

export default Header;