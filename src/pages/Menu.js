import React from 'react';
import greeksalad from '../assets/greeksalad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemondessert from '../assets/lemondessert.jpg';

function Menu() {
    return (
        <>
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
        </>
    )
}

export default Menu