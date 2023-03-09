import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [touchedMail, setTouchedMail] = useState(false);
  const [touchedLastName, setTouchedLastName] = useState(false);

  const handleNameChange = event => {
    const result = event.target.value.replace(/[^a-z]/gi, '');
    setFirstName(result);
  };

  const isValidName = firstName !== "";
  const isValidLastName = lastName !== "";
  const isValidMail = email !== "";


  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
          <div className="form">
            <div className="title">Welcome</div>
            <div className="subtitle">Let's create your account!</div>
            <div className="input-container ic1">
              <input required id="firstname" className="input" type="text" placeholder=" " value={firstName} minLength={2} maxLength={20} onChange={handleNameChange} onBlur={() => setTouched(true)}/>
              <p className="attention">{touched? (isValidName ? "" : "* Please fill in this field ") : null}</p>
              <div className="cut"></div>
              <label htmlFor="firstname" className="placeholder">First name</label>
            </div>
            <div className="input-container ic2">
              <input required id="lastname" className="input" type="text" placeholder=" " value={lastName} minLength={2} maxLength={25} onChange={(e) => setLastName(e.target.value)} onBlur={() => setTouchedLastName(true)}/>
              <p className="attention">{touchedLastName? (isValidLastName ? "" : "* Please fill in this field ") : null}</p>
              <div className="cut"></div>
              <label htmlFor="lastname" className="placeholder">Last name</label>
            </div>
            <div className="input-container ic2">
              <input required id="email" className="input" type="email" placeholder=" " value={email} minLength={5} maxLength={35} onChange={(e) => setEmail(e.target.value)} onBlur={() => setTouchedMail(true)}/>
              <p className="attention">{touchedMail? (isValidMail ? "" : "* Please fill in this field ") : null}</p>
              <div className="cut cut-short"></div>
              <label htmlFor="email" className="placeholder">Email</label>
            </div>
            <Link to="/homepage"><button type="text" className="submit" disabled={!firstName || !lastName || !email} onClick={handleScrollToTop}>Login</button></Link>
            <span>I already have an account</span>
            <Link to="/homepage"><button type="text" className="accept" onClick={handleScrollToTop}>Sign In</button></Link>
          </div>
    </>
    )
}