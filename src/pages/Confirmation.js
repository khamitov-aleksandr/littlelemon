import React from 'react';
import {Link} from 'react-router-dom';
export default function Confirmation() {
    return (
        <header className="confirmation-header">
            <section className="reserve-header-text">
                <h1>Your Reservation is Confirmed!</h1>
                <h4>A confirmation message has been sent to your email.</h4>
                <h4>Thanks for dining with us!</h4>
            </section>

            <section className="redirect-buttons">
                <Link className="redirect-button" to="/order-online">Order Online</Link>
            </section>
        </header>
    );
}