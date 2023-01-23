import "./styles.css";
import React from 'react'
import { ReactComponent as Logo } from '../assets/Logo.svg';
import Nav from './Nav';

export default function Header() {
  return (
      <header>
          <Logo />
          <Nav />
      </header>
  )
}