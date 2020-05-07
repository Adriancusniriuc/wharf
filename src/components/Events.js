import React from 'react'
import beerTasting from '../assets/beerTasting.jpg'
import quiz from '../assets/quiz.jpg'
import whiskyTasting from '../assets/whiskyTasting.jpg'

const Events = () => (
  <>
  <div className="events-parallax">
  <h2>EVENTS</h2>
  </div>
  <section id="events" className="events-section">
  <div className="event-img-div">
  
  <div className="event">
  <div className="event-txt">
  <h3>Pub Quiz</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea corrupti blanditiis ipsam ab nam quisquam possimus. Quasi amet, fugit eveniet modi quam iure quos nemo aliquid magnam repellat eligendi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea corrupti blanditiis ipsam ab nam quisquam possimus. Quasi amet, fugit eveniet modi quam iure quos nemo aliquid magnam repellat eligendi.</p>
  </div>
  <img className="img-events" src={quiz} alt="quiz"></img>
  </div>

  <div className="event">
  <img className="img-events"src={beerTasting} alt="beerTasting"></img>
  <div className="event-txt">
  <h3>Beer Tasting</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea corrupti blanditiis ipsam ab nam quisquam possimus. Quasi amet, fugit eveniet modi quam iure quos nemo aliquid magnam repellat eligendi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea corrupti blanditiis ipsam ab nam quisquam possimus. Quasi amet, fugit eveniet modi quam iure quos nemo aliquid magnam repellat eligendi.</p>
  </div>
  </div>

  <div className="event">
  <div className="event-txt">
  <h3>Whisky Tasting</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea corrupti blanditiis ipsam ab nam quisquam possimus. Quasi amet, fugit eveniet modi quam iure quos nemo aliquid magnam repellat eligendi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea corrupti blanditiis ipsam ab nam quisquam possimus. Quasi amet, fugit eveniet modi quam iure quos nemo aliquid magnam repellat eligendi.</p>
  </div>
  <img className="img-events"src={whiskyTasting} alt="whiskyTasting"></img>
  </div>

  </div>
  </section>
  </>
)

export default Events

