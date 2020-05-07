import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'


class Bar extends React.Component{
  state = { mouseTrackingEnabled: true, preventEventOnTouchMove: false }
  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    960: { items: 1 },
  }

  stagePadding = {
    paddingLeft: 30,
    paddingRight: 30,
  }
  render() {
  //   console.log(this.state)
  //   const handleOnDragStart = (e) => e.preventDefault()
  //   let responsive = {
  //   0: { items: 6 },
  //   1024: { items: 6 },
  // }
  const { mouseTrackingEnabled, preventEventOnTouchMove } = this.state

    return(
      <section id="bar" className="bar-section">
      
        <h2>BAR</h2>
        <h2>This week's cask ale selection</h2>
        <div className="carousel">
       <AliceCarousel
          showSlideInfo={true}
          preventEventOnTouchMove={preventEventOnTouchMove}
          mouseTrackingEnabled={mouseTrackingEnabled}
          fadeOutAnimation
          onSlideChanged={console.debug}
          // responsive={this.responsive}
          // duration={5000}
          infinite={true}
          // stagePadding={this.stagePadding}
          startIndex={1}
          // slideToIndex={3}
        >
      <div className="item">
      <img src={one} className="carouselImage" alt="blueshoes"/>one
      </div>

      <div className="item">
      <img src={two} className="carouselImage" 
      alt="blueshoes"/>
       <img src={three} className="carouselImage" alt="blueshoes"/>
       <img src={three} className="carouselImage" alt="blueshoes"/>
      </div>

      <div className="item">
       <img src={three} className="carouselImage" alt="blueshoes"/>
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





