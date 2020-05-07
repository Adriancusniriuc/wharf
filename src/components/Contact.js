import React from 'react'
import map from '../assets/map.jpg'
import { FaFacebook, FaInstagram, FaBeer } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


const Contact = () => (
<section>
<h2>Contact</h2>
<div className="contact-div">

  <div className="contact-info">
    
    <p> Borgergade 16   9000 Aalborg</p>
    <p>898989089</p>
    <div className="icon-div">
    <a href="mailto:thewharf@charlies.dk" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
    <a href="https://www.facebook.com/wharfaalborg/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
    <a href="https://www.instagram.com/thewharfaalborg/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    <a href="https://untappd.com/v/the-wharf/7009" target="_blank" rel="noopener noreferrer"><FaBeer /></a>
    </div>

    <h2>Opening Hours</h2>

    <p><b>Monday - Thursday</b></p>
    <p>11am - 11pm</p>
    <p><b>Friday</b></p>
    <p>11am - late</p>
    <p><b>Saturday</b></p>
    <p>10am - late</p>
    <p><b>Sunday</b></p>
    <p>10am - 6:30pm</p>
  
   </div>


 <div className="map-div">
   <img className="map" src={map} alt="map"></img>
 </div>

</div>
</section>



  )


export default Contact




