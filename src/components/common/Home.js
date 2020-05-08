import React from 'react'
// import { bounce } from "react-animations";
// import { fadeOutDown } from "react-animations";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

// const FadeOutDownAnimation = keyframes`${fadeOutDown}`
// const FadeOutDown = styled.div`animation: infinite 5s ${FadeOutDownAnimation};`
// const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`
// const FadeOutDown = styled.div`animation: 5s ${keyframes`${fadeOutDown}`}`
const FadeIn = styled.div`animation: 3s ${keyframes`${fadeIn}`}`

class Home extends React.Component {

  render() {
  return (
    <section className="home-section">
    <div id="home" className="img-home">

    <FadeIn>
    <h1>The Wharf</h1>
    </FadeIn>
    
  </div>

  <h2>Proudly Independent - Independently Proud</h2>
  <div className="about-para">
  <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea corrupti blanditiis ipsam ab nam quisquam possimus. Quasi amet, fugit eveniet modi quam iure quos nemo aliquid magnam repellat eligendi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea corrupti blanditiis ipsam ab nam quisquam possimus. Quasi amet, fugit eveniet modi quam iure quos nemo aliquid magnam repellat eligendi.</p>
  <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea corrupti blanditiis ipsam ab nam quisquam possimus. Quasi amet, fugit eveniet modi quam iure quos nemo aliquid magnam repellat eligendi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea corrupti blanditiis ipsam ab nam quisquam possimus. Quasi amet, fugit eveniet modi quam iure quos nemo aliquid magnam repellat eligendi.</p>
  </div>
  <hr/>
  </section>
  )

  }
}

export default Home