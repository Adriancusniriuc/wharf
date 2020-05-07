import React from 'react'
// import { Link } from 'react-router-dom'
import mainlogo from '../../assets/mainlogo.jpg'

const Nav = () => (
  <nav className="nav">
   <div className="logo-div" >
    <img className="logo" src={mainlogo} alt="logo" ></img>
   
  </div>
  
    <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#bar">Bar</a></li>
    <li><a href="#events">Events</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#contact">Contact</a></li>
    </ul>
  
  </nav>
)


export default Nav



