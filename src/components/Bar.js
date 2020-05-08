import React from 'react'
// import Slider from "react-slick";
// import AliceCarousel from 'react-alice-carousel'
// import 'react-alice-carousel/lib/alice-carousel.css'



// import one from '../assets/one.jpg'
// import two from '../assets/two.jpg'
// import three from '../assets/three.jpg'
// import four from '../assets/four.jpg'
// import five from '../assets/five.jpg'


// const photos = [
//   {
//     name: 1,
//     img: ('src/assets/one.jpg')
//   },
//   {
//     name: 2,
//     img: ('src/assets/two.jpg')
//   },
//   {
//     name: 3,
//     img: ('src/assets/three.jpg')
//   },
//   {
//     name: 4,
//     img: ('src/assets/four.jpg')
//   },
//   {
//     name: 5,
//     img: ('src/assets/five.jpg')
//   }
// ]

class Bar extends React.Component{


 
  render() {
  //   console.log(this.state)
  //   const handleOnDragStart = (e) => e.preventDefault()
  //   let responsive = {
  //   0: { items: 6 },
  //   1024: { items: 6 },
  // }
  // const { mouseTrackingEnabled, preventEventOnTouchMove } = this.state
  // const settings = {
  //   dots: true,
  //   fade:true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   className:"slides"
  // }
    return(
      <section id="bar" className="bar-section">
        <h2>BAR</h2>
        <h2>This week's cask ale selection</h2>
        <h2>Static Beers</h2>
        <p>CAROUSEL </p>
        <h2>Whiskies</h2>
        <p>CAROUSEL </p>
        {/* <div className="carousel" style={{padding:24}}>
        
        <Slider {...settings}>
          {photos.map((photo) => {
            return(
              <div>
                <img className="picture" src={one} alt="ph"/>
              </div>
            )
          })}
          <div>
          <img className="picture" src={two} alt="ph"/>
          </div>
          <div>
          <img className="picture" src={two} alt="ph"/>
          </div>
        </Slider>
      </div> */}
      </section>
      )
  }
}




export default Bar
