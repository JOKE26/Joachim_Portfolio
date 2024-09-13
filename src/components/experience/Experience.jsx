import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='competences'>
      <h5>Découvrez mes compétences techniques</h5>
      <h2>Mes Compétences Techniques</h2>

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
                  <h4>Bootstrap</h4>
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
                  <h4>WordPress</h4>
                  <small className='text-light'>Expérimenté</small>
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
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Next JS</h4>
                  <small className='text-light'>Intermédiaire</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Tailwind CSS</h4>
                  <small className='text-light'>Intermédiaire</small>
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
                  <h4>MySQL</h4>
                  <small className='text-light'>Expérimenté</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>PostgreSQL</h4>
                  <small className='text-light'>Intermédiaire</small>
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
                  <small className='text-light'>Intermédiaire</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Intermédiaire</small>
                </div>
              </article>
            </div>
        </div>

        <div className="experience_tools">
          <h3>Outils Techniques</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>GIT</h4>
                  <small className='text-light'>Expérimenté</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>JIRA</h4>
                  <small className='text-light'>Intermédiaire</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>TRELLO</h4>
                  <small className='text-light'>Intermédiaire</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Canva</h4>
                  <small className='text-light'>Expérimenté</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Figma</h4>
                  <small className='text-light'>Intermédiaire</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience