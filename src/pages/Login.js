import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touchedPassword, setTouchedPassword] = useState(false);
  const [touchedMail, setTouchedMail] = useState(false);


  const handleSubmit = () => {
    console.log("Form submited");
  }

  // if(document.addEventListener){
  //   document.addEventListener('invalid', function(e){
  //       e.target.className += ' invalid';
  //   }, true);
  // }

  const isValidMail = email !== "";
  const isValidPassword = password !== "";


  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
          <form className="form" onSubmit={handleSubmit}>
            <div className="title">Welcome</div>
            <div className="subtitle">login to your account</div>
            <div className="input-container ic1">
              <input required id="email" className="input" type="email" placeholder="" value={email} minLength={5} maxLength={35} onChange={(e) => setEmail(e.target.value)} onBlur={() => setTouchedMail(true)}/>
              <p className="attention">{touchedMail? (isValidMail ? "" : "* Please fill in this field ") : null}</p>
              <div className="cut cut-short"></div>
              <label htmlFor="email" className="placeholder">Email</label>
            </div>
            <div className="input-container ic1">
              <input required id="password" className="input" type="password" placeholder="" value={password} minLength={4} maxLength={8} onChange={(e) => setPassword(e.target.value)} onBlur={() => setTouchedPassword(true)}/>
              <p className="attention">{touchedPassword? (isValidPassword ? "" : "* Please fill in this field ") : null}</p>
              <div className="cut cut-short3"></div>
              <label htmlFor="password" className="placeholder">Password</label>
            </div>
            <Link to="/homepage"><button type="submit" className="submit" disabled={!isValidPassword || !isValidPassword} onClick={handleScrollToTop}>Login</button></Link>
            <div className="subtitle">I don't have an account</div>
             <div className="subtitle">Let's create your account!</div>
            <Link to="/signin"><button type="text" className="accept" onClick={handleScrollToTop}>Sign Up</button></Link>
          </form>
    </>
  )
}