import React from 'react';
import {Link} from 'react-router-dom';
export default function Confirmation() {

    return (
        <header className="title">
            <section className="subtitle">
                <h1>Your Reservation is Confirmed!</h1>
                <h4>A confirmation message has been sent to your email.</h4>
                <h4>Thanks for dining with us!</h4>
            </section>
            <section className="">
                <Link className="" to="/order-online">Order Online</Link>
            </section>
        </header>
    );
}