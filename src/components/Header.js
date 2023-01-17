import "./styles.css";
import React from 'react'
import { ReactComponent as Logo } from './Logo.svg';
import Nav from './Nav';

export default function Header() {
  return (
      <header>
          <Logo />
          <Nav />
      </header>
  )
}