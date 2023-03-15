import React, {useState} from "react";
import { NavLink } from 'react-router-dom';

const Hamburger = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    return(
        <div className="hamburger">
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
            </nav>
            <div className={menu_class}>
                <ul className="ul-nav-header-burger">
                    <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/about">About</NavLink></li>
                    <li className="nav-item"><NavLink to="/menu">Menu</NavLink></li>
                    <li className="nav-item"><NavLink to="/reservations">Reservations</NavLink></li>
                    {/* <li className="nav-item"><NavLink to="/order-online">Order Online</NavLink></li> */}
                    <li className="nav-item"><NavLink to="/login">Login</NavLink></li>
                    <li className="nav-item"><NavLink to="/feedback">Feedback</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
export default Hamburger