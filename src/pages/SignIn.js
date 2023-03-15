import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Signin() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [touched, setTouched] = useState(false);
    const [touchedMail, setTouchedMail] = useState(false);
    const [touchedLastName, setTouchedLastName] = useState(false);

    const handleNameChange = event => {
      const result = event.target.value.replace(/[^a-z]/gi, '');
      setFirstName(result);
    };

    const handleSubmit = () => {
      console.log("Form submited");
    }

    const isValidName = firstName !== "";
    const isValidLastName = lastName !== "";
    const isValidMail = email !== "";
    const isValidPassword = password !== "";

    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your account!</div>
                <div className="input-container ic1">
                    <input required id="firstname" className="input" type="text" placeholder="" value={firstName} minLength={2} maxLength={20} onChange={handleNameChange} onBlur={() => setTouched(true)}/>
                    <p className="attention">{touched? (isValidName ? "" : "* Please fill in this field ") : null}</p>
                    <div className="cut"></div>
                    <label htmlFor="firstname" className="placeholder">First name</label>
                </div>
                <div className="input-container ic1">
                    <input required id="lastname" className="input" type="text" placeholder="" value={lastName} minLength={2} maxLength={25} onChange={(e) => setLastName(e.target.value)} onBlur={() => setTouchedLastName(true)}/>
                    <p className="attention">{touchedLastName? (isValidLastName ? "" : "* Please fill in this field ") : null}</p>
                    <div className="cut"></div>
                    <label htmlFor="lastname" className="placeholder">Last name</label>
                </div>
                <div className="input-container ic1">
                    <input required id="email" className="input" type="email" placeholder="" value={email} minLength={5} maxLength={35} onChange={(e) => setEmail(e.target.value)} onBlur={() => setTouchedMail(true)}/>
                    <p className="attention">{touchedMail? (isValidMail ? "" : "* Please fill in this field ") : null}</p>
                    <div className="cut cut-short"></div>
                    <label htmlFor="email" className="placeholder">Email</label>
                </div>
                <div className="input-container ic1">
                    <input required id="password" className="input" type="password" placeholder="" value={password} minLength={4} maxLength={8} onChange={(e) => setPassword(e.target.value)} onBlur={() => setTouchedMail(true)}/>
                    <p className="attention">{touchedMail? (isValidPassword ? "" : "* Please fill in this field ") : null}</p>
                    <div className="cut cut-short3"></div>
                    <label htmlFor="password" className="placeholder">Password</label>
                </div>
                <div className="input-container ic2">
                    <Link to="/successfullyregistered" onClick={handleScrollToTop} ><button type="button" disabled={!isValidName || !isValidLastName} className="acceptconfirm">Sign Up</button></Link>
                </div>
            </form>
    </>
    )
}