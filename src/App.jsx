import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <div>
        <Header />
        <Nav />
        <About/>
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
        <Analytics />
    </div>
  )
}

export default App