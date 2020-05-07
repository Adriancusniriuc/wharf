import React from 'react'
import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'
import five from '../assets/five.jpg'
import six from '../assets/six.jpg'
import seven from '../assets/seven.jpg'
import eight from '../assets/eight.jpg'

class Gallery extends React.Component {
  render() {
    return (
      <section id="gallery" className="gallery-section">
        
      <h2>GALLERY</h2>
      <div className="gallery-img-div">
      <img className="img-gallery" src={one} alt="1"></img>
      <img className="img-gallery" src={two} alt="2"></img>
      <img className="img-gallery" src={three} alt="3"></img>
      <img className="img-gallery" src={four} alt="4"></img>
      <img className="img-gallery" src={five} alt="5"></img>
      <img className="img-gallery" src={six} alt="6"></img>
      <img className="img-gallery" src={seven} alt="7"></img>
      <img className="img-gallery" src={eight} alt="8"></img>
      </div>
      <hr/>
      </section>
    )
  }
}

export default Gallery