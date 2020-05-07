import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'


class Bar extends React.Component{

  render() {
    const handleOnDragStart = (e) => e.preventDefault()
    let responsive = {
    0: { items: 1 },
    1024: { items: 5 },
  }
    return(
      <section id="bar" className="bar-section">
        <h2>BAR</h2>
        <h2>This week's cask ale selection</h2>
        <div className="carousel">
        <AliceCarousel  
        responsive={responsive}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        dotsDisabled={true}
        buttonsDisabled={true}
        infinite={true}
        startIndex={0}
        slideToIndex={0}
      >
       <div className="slide-div">
         <img src={one} alt="one" onDragStart={handleOnDragStart} className="slide-img"></img>
         <h3>Name of Beer <span>£££</span></h3>
         <p>Tasting Notes</p>
      </div> 
      <div className="slide-div">
         <img src={two} alt="one" onDragStart={handleOnDragStart} className="slide-img"></img>
         <h3>Name of Beer <span>£££</span></h3>
         <p>Tasting Notes</p>
      </div> 
      <div className="slide-div">
         <img src={three} alt="one" onDragStart={handleOnDragStart} className="slide-img"></img>
         <h3>Name of Beer <span>£££</span></h3>
         <p>Tasting Notes</p>
      </div> 
      <div className="slide-div">
         <img src={three} alt="one" onDragStart={handleOnDragStart} className="slide-img"></img>
         <h3>Name of Beer <span>£££</span></h3>
         <p>Tasting Notes</p>
      </div> 
      <div className="slide-div">
         <img src={three} alt="one" onDragStart={handleOnDragStart} className="slide-img"></img>
         <h3>Name of Beer <span>£££</span></h3>
         <p>Tasting Notes</p>
      </div> 
      <div className="slide-div">
         <img src={three} alt="one" onDragStart={handleOnDragStart} className="slide-img"></img>
         <h3>Name of Beer <span>£££</span></h3>
         <p>Tasting Notes</p>
      </div> 

        </AliceCarousel>
        </div>


        <h2>Static Beers</h2>
        <p>CAROUSEL </p>
        <h2>Whiskies</h2>
        <p>CAROUSEL </p>
        
      </section>
      )
  }
}




export default Bar