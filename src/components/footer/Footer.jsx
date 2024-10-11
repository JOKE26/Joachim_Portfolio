import React from 'react'
import './footer.css'
import logo from '../../assets/favicon.ico'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'><img src={logo} alt='logo' /></a>

      <ul className='permalinks'>
        <li><a href="#">Accueil</a></li>
        <li><a href="#about">A Propos</a></li>
        <li><a href="#experiences">Compétences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/joachim-degboe/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/JOKE26" target="_blank"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Joachim's Portfolio, do with Reactjs. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer