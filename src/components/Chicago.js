import React from 'react';
import MarioAndAdrianA from './MarioAndAdrianA.jpg';
import MarioAndAdrianB from './MarioAndAdrianB.jpg'

function Chicago() {
    return (
        <section className='about'>
            <article>
              <h2>Little Lemon</h2>
              <span>Chicago</span>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
              <button>See more</button>
            </article>
            <div>
              <img src={MarioAndAdrianA} alt="Mario and Adrian side A" />
              <img src={MarioAndAdrianB} alt="Mario and Adrian side B" />
            </div>
        </section>
    )
}

export default Chicago;