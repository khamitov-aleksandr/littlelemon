import React from 'react';

export function showStars() {
    return (
            <img
                height={15}
                src={require('./star.jpg')}
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
                        src={require('./sara.jpg')}
                        alt={"sara"}
                        borderTopLeftRadius={15}
                    />
                        <p>Sara Lopez</p>
                        <p>(Sara72)</p>
                </div>
                <p>“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”</p>
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
                        src={require('./jhon.jpg')}
                        alt={"jhon"}
                        borderTopLeftRadius={15}
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
                        src={require('./devid.jpg')}
                        alt={"Devid"}
                        borderTopLeftRadius={15}
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
                        src={require('./elizabet.jpg')}
                        alt={"elizabet"}
                        borderTopLeftRadius={15}
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