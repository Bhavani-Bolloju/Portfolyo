// import React from 'react'

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Video from './components/video/Video';
import Testimonials from './components/testimonials/Testimonials';
import News from './components/news/News';
import Contact from './components/contact/Contact';
import Copyrights from './components/copyrights/Copyrights';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Video/>
      <Testimonials/>
      <News/>
      <Contact/>
      <Copyrights/>
    </div>
  )
}

export default App