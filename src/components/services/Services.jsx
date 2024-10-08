import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Qu'est ce que j'ai à offrir</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className="service_head">
            <h3>Développement Web</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Développement de sites Web responsives.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Développement front-end en utilisant des technologies telles que React.js ou Next.js</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Développement back-end sécurisé et performant</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Développement d'applications web personnalisées adaptées aux besoins des clients</p>
            </li>
          </ul>
        </article>


        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Création de maquette avec Figma</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Conception d'affiches et de supports graphiques avec Canva</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Conception graphique avancée avec Photoshop</p>
            </li>
          </ul>
        </article>


        {/* <article className='service'>
          <div className="service_head">
            <h3>Création de contenu</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  )
}

export default Services