import React from 'react'
import beerTasting from '../assets/beerTasting.jpg'
import quiz from '../assets/quiz.jpg'
import whiskyTasting from '../assets/whiskyTasting.jpg'

const Events = () => (
  <>
  <div className="events-parallax">
  <h2>Events</h2>
  </div>
  <section id="events" className="events-section">
  <div className="event-img-div">
  
  <div className="event">
  <div className="event-txt">
  <h3>Pub Quiz</h3>
  <h4>5 per team  *  Entry Fee 30kr  *  7pm Start</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea corrupti blanditiis ipsam ab nam quisquam possimus. Quasi amet, fugit eveniet modi quam iure quos nemo aliquid magnam.</p>
  </div>
  <img className="img-events" src={quiz} alt="quiz"></img>
  </div>

  <div className="event">
  <img className="img-events"src={beerTasting} alt="beerTasting"></img>
  <div className="event-txt">
  <h3>Beer Tasting</h3>
  <h4>Min. 10 participants  *  Price 300kr</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea corrupti blanditiis ipsam ab nam quisquam possimus. Quasi amet, fugit eveniet modi quam iure quos nemo aliquid magnam repellat eligendi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea corrupti blanditiis ipsam ab nam quisquam possimus. Quasi amet, fugit eveniet modi quam iure quos nemo aliquid magnam repellat eligendi.</p>
  </div>
  </div>

  <div className="event">
  <div className="event-txt">
  <h3>Whisky Tasting</h3>
  <h4>Only 27 spaces per session  *  Session-based pricing</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea corrupti blanditiis ipsam ab nam quisquam possimus. Quasi amet, fugit eveniet modi quam iure quos nemo aliquid magnam repellat eligendi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea corrupti blanditiis ipsam ab nam quisquam possimus. Quasi amet, fugit eveniet modi quam iure quos nemo aliquid magnam repellat eligendi.</p>
  </div>
  <img className="img-events"src={whiskyTasting} alt="whiskyTasting"></img>
  </div>

  </div>
  </section>
  </>
)

export default Events

