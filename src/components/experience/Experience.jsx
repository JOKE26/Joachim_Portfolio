import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='competences'>
      <h5>Quelles sont les compétences que j'ai</h5>
      <h2>Mes Compétences</h2>

      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3>Développement Frontend</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Expérimenté</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermédiaire</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Expérimenté</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Bootsrap</h4>
                  <small className='text-light'>Expérimenté</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>React JS</h4>
                  <small className='text-light'>Expérimenté</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Wordpress</h4>
                  <small className='text-light'>Intermédiaire</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Flutter</h4>
                  <small className='text-light'>Débutant</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Angular JS</h4>
                  <small className='text-light'>Débutant</small>
                </div>
              </article>
            </div>
        </div>

        <div className="experience_backend">
        <h3>Développement Backend</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>MySql</h4>
                  <small className='text-light'>Expérimenté</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Intermédiaire</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Symfony</h4>
                  <small className='text-light'>Expérimenté</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience