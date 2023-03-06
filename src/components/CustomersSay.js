import React from 'react';

export function showStars() {
    return (
            <img
                height={15}
                src={require('../assets/star.jpg')}
                alt={"star"}
            />
    );
}

function CustomersSay() {
    return (
    <section className='testimonials'>
        <h2>Testimonials</h2>
        <aside>
            <article>
                {showStars()}
                {showStars()}
                {showStars()}
                {showStars()}
                {showStars()}
                <div>
                    <img
                        height={50}
                        src={require('../assets/sara.jpg')}
                        alt={"sara"}
                    />
                        <p>Sara Lopez</p>
                        <p>(Sara72)</p>
                </div>
                <p>“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!”</p>
            </article>
            <article>
                {showStars()}
                {showStars()}
                {showStars()}
                {showStars()}
                {showStars()}
                <div>
                    <img
                        height={50}
                        src={require('../assets/jhon.jpg')}
                        alt={"jhon"}
                    />
                        <p>Jhon Aflek</p>
                        <p>(Jhon83)</p>
                </div>
                <p>“This is the most delicious pasta I have ever tasted!”</p>
            </article>
            <article>
                {showStars()}
                {showStars()}
                {showStars()}
                {showStars()}
                {showStars()}
                <div>
                    <img
                        height={50}
                        src={require('../assets/devid.jpg')}
                        alt={"Devid"}
                    />
                        <p>Devid Grey</p>
                        <p>(Dav72)</p>
                </div>
                <p>“I recommend trying the dessert! Very tasty!!”</p>
            </article>
            <article>
                {showStars()}
                {showStars()}
                {showStars()}
                {showStars()}
                {showStars()}
                <div>
                    <img
                        height={50}
                        src={require('../assets/elizabet.jpg')}
                        alt={"elizabet"}
                    />
                        <p>Elizabet Blue</p>
                        <p>(Eliz05)</p>
                </div>
                <p>“Definitely the best restaurant. Discovery of the year!”</p>
            </article>
        </aside>
    </section>
    )
}

export default CustomersSay;