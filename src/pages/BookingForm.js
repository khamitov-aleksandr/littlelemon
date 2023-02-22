import React, { useState } from "react";
import {Link} from 'react-router-dom';

const formforform = { display: "grid", maxWidth: "200px", gap: "20px" };

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

    const handleSubmit = (e) => {
        console.log("?");
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
        <h2 className="title">Reservation</h2>
            <form style={ formforform } onChange={handleSubmit}><br/>
                <label htmlFor="firsName" className="labelforreservation">Name:</label>
                <input id="first" className="input" type="text" placeholder="First Name" name="firstName" required value={firstName} minLength={2} maxLength={20} onChange={(e) => setFirstName(e.target.value)} />
                <label htmlFor="lastName" className="labelforreservation">Last Name</label>
                <input type="text" id="lastName" className="input" placeholder="Last Name" name="lastName" minLength={2} maxLength={25} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <label htmlFor="email" className="labelforreservation">Email</label>
                <input type="email" id="email" className="input" placeholder="Your Email address" required value={email} minLength={4} maxLength={200} onChange={(e) => setEmail(e.target.value)}></input>
                <label htmlFor="date" className="labelforreservation">Choose date</label>
                <input type="date" id="date" className="input" required value={date} onChange={handleDateChange}/>
                <label htmlFor="phonenum" className="labelforreservation">Phone Number</label>
                <input  type="tel" id="telephone" placeholder="+xx-(x)-x-xx-xx-xx-xx" value={telephone} required minLength={6} maxLength={21} onChange={(e) => setTelephon(e.target.value)}></input>
                <label htmlFor="time" className="labelforreservation">Choose time</label>
                <select id="time" required>
                    {finalTime}
                </select>
                <label htmlFor="guests" className="labelforreservation">Number of guests</label>
                <input className="input" type="number" placeholder="1" min={1} max={10} id="guests" value={guests} required onChange={(e) => setGests(e.target.value)} />
                <label htmlFor="occasion" className="labelforreservation">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>
                <label htmlFor="preferences" className="labelforreservation">Seating preferences</label>
                <select id="preferences" value={preferences} onChange={e => setPreferences(e.target.value)}>
                    <option>Indoors</option>
                    <option>Outdoor</option>
                </select>
                <label htmlFor="comments" className="labelforreservation">Additional Comments</label>
                <textarea id="comments" rows={6} cols={30} placeholder="Additional Comments" value={comments} onChange={(e) => setComments(e.target.value)}>
                </textarea>
                <small>Note: You cannot edit your reservation after submission. Please double-check your answer before submitting your reservation request.</small>
                <button className="submit" type="text" disabled={!firstName} value="Reservation"><Link to="/reservations">Make Your reservation</Link></button>
            </form><br/>
        </>
    )
}

export default BookingForm