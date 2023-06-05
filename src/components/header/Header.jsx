import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/Profil2.svg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Salut je suis</h5>
        <h1>Joachim-Willy DEGBOE</h1>
        <h5 className='text-light'>Developpeur web et mobile</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="L'aventurier en moi" />
        </div>

        <a href="#contact" className='scroll__down'>Défiler en bas</a>
      </div>
    </header>
  )
}

export default Header