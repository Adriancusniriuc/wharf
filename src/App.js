import React from 'react';
import './App.css';
import  './styles/main.scss'
// import Nav from './components/common/Nav'
import Home from './components/common/Home'
import Bar from './components/Bar';
import Events from './components/Events'
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/common/Footer';

// import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
      {/* <Switch></Switch> */}
      {/* <Nav /> */}
      <Home/>
      <Bar/>
      <Events />
      <Gallery />
      <Contact />
      <Footer />
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App;


