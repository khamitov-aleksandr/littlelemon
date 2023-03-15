import "./styles.css";
import React from 'react'
import { ReactComponent as Logo } from '../assets/Logo.svg';
import Nav from './Nav';
import Hamburger from './Hamburger';

export default function Header() {
  return (
      <header>
          <Logo />
          <Nav />
          <Hamburger />
      </header>
  )
}