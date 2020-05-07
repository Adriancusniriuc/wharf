import React from 'react'
import beerTasting from '../assets/beerTasting.jpg'
import quiz from '../assets/quiz.jpg'
import whiskyTasting from '../assets/whiskyTasting.jpg'

const Events = () => (
  <section id="events" className="events-section">
  <h2>EVENTS</h2>
  <div className="event-img-div">
  <img className="img-events" src={quiz} alt="quiz"></img>
  <img className="img-events"src={beerTasting} alt="beerTasting"></img>
  <img className="img-events"src={whiskyTasting} alt="whiskyTasting"></img>
  </div>
  <hr/>
  </section>
)

export default Events