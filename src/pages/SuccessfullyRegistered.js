import React from 'react';
import {Link} from 'react-router-dom';

export default function SuccessfullyRegistered() {

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
      }

    return (
        <>
            <div className="formconfirm">
                <h2 className="titleconfirm">Congratulations!</h2>
                <h3 className="subtitleconfirm ic1">You have successfully registered</h3>
                <h4 className="subtitleconfirm ic1">Thanks for your feedback!</h4>
                <Link to="/menu" onClick={handleScrollToTop}><button type="button" className="acceptconfirm">Online menu</button></Link>
                <Link to="/order-online" onClick={handleScrollToTop}><button type="button" className="acceptconfirm">Order Online</button></Link>
                <Link to="/" onClick={handleScrollToTop}><button type="button" className="acceptconfirm">Homepage</button></Link>
            </div>
        </>
    );
}