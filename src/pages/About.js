import React from 'react';
import { Link } from 'react-router-dom';
import restaurantchef from "../assets/restaurantchef.jpg";

function About() {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
      }
    return (
        <>
            <div className="bg-img">
                <img className="restaurantchef" src={restaurantchef} alt="Restaurant Chef" />
                 <form className="aboutrestaurant">
                    <h2 className='title'>About Little Lemon Restaurant</h2>
                    <div className="subtitle">Little story</div>
                    <span>Fifteen years ago it was our dream to open a restaurant.
                          We are family owned Mediterranean restaurant, focused on
                          traditional recipes served with a modern twist. We are
                          happy to see you in our Little Lemon restaurant
                    </span>
                    <div>
                        <Link to="/feedback"><button className='btn2' onClick={handleScrollToTop}>Leave feedback</button></Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default About