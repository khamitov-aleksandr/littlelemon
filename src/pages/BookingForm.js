import React, { useState } from "react";
import {Link} from 'react-router-dom';

function BookingForm(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephon] = useState("");
    const [guests, setGests] = useState(1);
    const [date, setDate] = useState("");
    const [occasion, setOccasion] = useState("");
    const [preferences, setPreferences] = useState("");
    const [comments, setComments] = useState("");
    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map((times, i) => <option key={i}>{times}</option>)
    );

    const handleChange = event => {
        const result = event.target.value.replace(/[^a-z]/gi, '');
        setFirstName(result);
      };

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
      }

    const handleSubmit = (e) => {
        console.log("Form submitted");
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
        e.preventDefault();
        var stringify = e.target.value;
        const date = new Date(stringify);
        props.updateTimes(date);
        setFinalTime(props.availableTimes.map((times, i) => <option key={i}>{times}</option>));
        console.log("!");
    }

    return (
        <>
            <div className="bookForm" onChange={handleSubmit}>
                <div className="title">Reservation</div>
                <div className="subtitle">Book Now!</div>
                <div className="input-container ic3">
                    <input required id="firstname" className="input" type="text" name="firstName" value={firstName} minLength={2} maxLength={20} onChange={handleChange}/>
                    <label htmlFor="firstname" className="placeholderbook">First name: </label>
                </div>
                <div className="input-container ic3">
                    <input required id="lastname" className="input" type="text" placeholder=" " name="lastName" minLength={2} maxLength={25} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <label htmlFor="lastname" className="placeholderbook">Last name: </label>
                </div>
                <div className="input-container ic3">
                    <input required id="email" className="input" type="email" autoComplete="off" placeholder=" " value={email} minLength={4} maxLength={40} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="email" className="placeholderbook">Email: </label>
                </div>
                <div className="input-container ic3">
                    <input required type="date" id="date" className="input" value={date} onChange={handleDateChange}/>
                    <label htmlFor="date" className="placeholderbook">Choose date: </label>
                </div>
                <div className="input-container ic3" data-tooltip="Format: +(0)123-45-678">
                    <input required id="telephone" className="input" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={telephone} minLength={6} maxLength={21} onChange={(e) => setTelephon(e.target.value)}/>
                    <label htmlFor="telephone" className="placeholderbook" >Phone Number: </label>
                </div>
                <div className="input-container ic3">
                    <select required id="time" className="inputTime" >
                        {finalTime}
                    </select>
                    <label htmlFor="telephone" className="placeholderbook">Choose time: </label>
                </div>
                <div className="input-container ic3">
                    <input required className="input" type="number" min={1} max={10} id="guests" value={guests} onChange={(e) => setGests(e.target.value)} />
                    <label htmlFor="date" className="placeholderbook">Number of guests: </label>
                </div>
                <div className="input-container ic3">
                    <select required id="occasion" className="inputTime" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                        <option>Other</option>
                    </select>
                    <label htmlFor="occasion" className="placeholderbook">Occasion: </label>
                </div>
                <div className="input-container ic3">
                    <select required id="preferences" className="inputTime" value={preferences} onChange={e => setPreferences(e.target.value)}>
                        <option>Indoors</option>
                        <option>Outdoor</option>
                    </select>
                    <label htmlFor="preferences" className="placeholderbook">Seating preferences: </label>
                </div>
                <div className="input-container ic3">
                    <textarea id="comments" className="inputTime" spellcheck="true" rows={6} cols={30} value={comments} onChange={(e) => setComments(e.target.value)} />
                    <label htmlFor="comments" className="placeholderbook">Additional Comments: </label>
                </div>
                <small>Note: You cannot edit your reservation after submission. Please double-check your answer before submitting your reservation request.</small>
                <Link to="/confirmation"><button className="submit" type="text" disabled={!firstName || !email || !telephone || !lastName} value="Reservation" onClick={handleScrollToTop}>Make your reservation</button></Link>
            </div>
        </>
    )
}

export default BookingForm