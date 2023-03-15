import React, { useState } from "react";
import {Link} from 'react-router-dom';

function OrderOnline() {
    const phonePlaceholder = "123-45-678";

    const handleChange = event => {
        const result = event.target.value.replace(/[^a-z]/gi, '');
        setFirstName(result);
      };

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
      }

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephon] = useState("");
    const [comments, setComments] = useState("");

    const handleSubmit = (e) => {
        console.log("?");
    }

    return (
        <>
            <div className="bookFormOnline" onChange={handleSubmit}>
                <div className="title">Order Online</div>
                <div className="subtitle">Order Right Now!</div>
                <span>I already have an account</span>
                <Link to="/homepage"><button type="button" className="accept" onClick={handleScrollToTop}>Sign In</button></Link>
                <h3>Delivery address:</h3>
                Street name
                House number
                Postcode
                City
                Add note (optional)
                <h3>Personal Details:</h3>

                <div className="input-container ic3">
                    <input id="firstname" className="input" type="text" name="firstName" value={firstName} minLength={2} maxLength={20} onChange={handleChange}/>
                    <label htmlFor="firstname" className="placeholderbook">First name: </label>
                </div>
                <div className="input-container ic3">
                    <input id="lastname" className="input" type="text" placeholder=" " name="lastName" minLength={2} maxLength={25} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <label htmlFor="lastname" className="placeholderbook">Last name: </label>
                </div>
                <div className="input-container ic3">
                    <input id="email" className="input" type="email" placeholder=" " value={email} minLength={4} maxLength={40} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="email" className="placeholderbook">Email: </label>
                </div>
                <div className="input-container ic3" data-tooltip="Format: 123-45-678">
                    <input  id="telephone" className="input" type="tel" placeholder={phonePlaceholder} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={telephone} minLength={6} maxLength={21} onChange={(e) => setTelephon(e.target.value)}/>
                    <label htmlFor="telephone" className="placeholderbook" >Phone Number: </label>
                </div>
                <div className="input-container ic3">
                    <textarea id="comments" className="inputTime" rows={6} cols={30} value={comments} onChange={(e) => setComments(e.target.value)} />
                    <label htmlFor="comments" className="placeholderbook">Additional Comments: </label>
                </div>
                Checkbox * Receive discounts, loyalty offers and other updates via email, SMS and push notification
                <small>Note: You cannot edit your reservation after submission. Please double-check your answer before submitting your reservation request.</small>
                <Link to="/confirmation"><button className="submit" type="text" disabled={!firstName || !email || !telephone || !lastName} value="Reservation" onClick={handleScrollToTop}>Order & pay</button></Link>
            </div>
        </>
    )
}

export default OrderOnline