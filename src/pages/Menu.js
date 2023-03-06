import React from 'react';
import { Link } from 'react-router-dom';
import greeksalad from '../assets/greeksalad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemondessert from '../assets/lemondessert.jpg';
import cheese from '../assets/cheese.jpg';
import bolognese from "../assets/bolognese.jpeg";
import lasagna from "../assets/lasagna.png";

function Menu() {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }
    return (
        <>
        <div className='cards m4'>
                <div className='card'>
                  <img src={greeksalad} alt="Greek salad" />
                  <h3>Greek salad</h3>
                  <h3>$12.99</h3>
                  <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                  <div className="card-footer">
                    <Link to="/order-online"><button onClick={handleScrollToTop}>Order</button></Link>
                  </div>
                </div>
                <div className='card'>
                  <img src={bruchetta} alt="Bruchetta" />
                  <h3>Bruchetta</h3>
                  <h3>$5.99</h3>
                  <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                  <div className="card-footer">
                    <Link to="/order-online"><button onClick={handleScrollToTop}>Order</button></Link>
                  </div>
                </div>
                <div className='card'>
                  <img src={lemondessert} alt="Lemon dessert" />
                  <h3>Lemon Dessert</h3>
                  <h3>$5.00</h3>
                  <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                  <div className="card-footer">
                    <Link to="/order-online"><button onClick={handleScrollToTop}>Order</button></Link>
                  </div>
                </div>
                <div className='card'>
                  <img src={cheese} alt="Turkish Mac n’ Cheese" />
                  <h3>Turkish Mac n’ Cheese</h3>
                  <h3>$12.99</h3>
                  <p>This one-pot turkey mac and cheese is like a grownup version of hamburger helper and a much healthier option than that boxed stuff.</p>
                  <div className="card-footer">
                    <Link to="/order-online"><button onClick={handleScrollToTop}>Order</button></Link>
                  </div>
                </div>
                <div className='card'>
                  <img src={bolognese} alt="Bolognese" />
                  <h3>Bruchetta</h3>
                  <h3>$5.99</h3>
                  <p>Our best ever spaghetti bolognese is super easy and a true Italian classic with a meaty, chilli sauce.</p>
                  <div className="card-footer">
                    <Link to="/order-online"><button onClick={handleScrollToTop}>Order</button></Link>
                  </div>
                </div>
                <div className='card'>
                  <img src={lasagna} alt="Lasagna" />
                  <h3>Lemon Dessert</h3>
                  <h3>$5.00</h3>
                  <p> Layered with a rich meat sauce and a creamy parmesan white sauce, plus the perfect amount of mozzarella cheese!</p>
                  <div className="card-footer">
                    <Link to="/order-online"><button onClick={handleScrollToTop}>Order</button></Link>
                  </div>
                </div>
              </div>
        </>
    )
}

export default Menu