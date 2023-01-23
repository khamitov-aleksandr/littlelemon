import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import "./styles.css";
import restauranfood from '../assets/restauranfood.jpg';
import greeksalad from '../assets/greeksalad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemondessert from '../assets/lemondessert.jpg';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

function Homepage() {
  return (
        <main>
          <section className='hero'>
            <article>
              <h2>Little Lemon</h2>
              <span>Chicago</span>
              <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
              <button><Link to="/reservations">Reserve a Table</Link></button>
              <Routes>
                <Route path='/reservations'/>
              </Routes>
            </article>
            <img src={restauranfood} alt="restauran food" />
          </section>
          <section className='highlights'>
            <article>
              <h2>This week specials!</h2>
              <button><Link to="/menu">Online menu</Link></button>
              <Routes>
                <Route path='/menu'/>
              </Routes>
            </article>
              <div className='cards'>
                <div className='card'>
                  <img src={greeksalad} alt="Greek salad" />
                  <h3>Greek salad</h3>
                  <h3>$12.99</h3>
                  <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                  <h4>Order a delivery</h4>
                </div>
                <div className='card'>
                  <img src={bruchetta} alt="Bruchetta" />
                  <h3>Bruchetta</h3>
                  <h3>$5.99</h3>
                  <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                  <h4>Order a delivery</h4>
                </div>
                <div className='card'>
                  <img src={lemondessert} alt="Lemon dessert" />
                  <h3>Lemon Dessert</h3>
                  <h3>$5.00</h3>
                  <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                  <h4>Order a delivery</h4>
                </div>
              </div>
          </section>
          <CustomersSay />
          <Chicago />
        </main>
  )
}

export default Homepage;