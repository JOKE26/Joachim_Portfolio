import React from 'react'
import './about.css'
import ME from '../../assets/contact-img.svg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'
import {BsEmojiSmileUpsideDown} from 'react-icons/bs'



const About = () => {
  return (
    <section id='about'>
      <h5>Faisons Connaisance</h5>
      <h2>A propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Mon côté bosseur" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'> 
              <FaAward className='about__icon' />
              <h5>Expérience</h5>
              <small>Pas beaucoup, mais assez motivé pour en gagner <BsEmojiSmileUpsideDown /></small>
            </article>
            <article className='about__card'> 
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Vous êtes mon futur client!!</small>
            </article>
            <article className='about__card'> 
              <VscFolderOpened className='about__icon' />
              <h5>Projets</h5>
              <small>Je suis avide de nouveaux projets</small>
            </article>
          </div>

          <p>
          Autonome, rigoureux. Je suis passionné par le développement web et mobile. 
          Actuellement je suis en Bac+4 Architect Digital/Web à l'Institut F2i de Vincennes.  
          </p>

          <a href="#contact" className='btn btn-primary'>Alors, on discute!</a>
        </div>
      </div>
    </section>
  )
}

export default About