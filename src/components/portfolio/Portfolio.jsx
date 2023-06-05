import React from 'react'
import './portfolio.css'
import IMG from '../../assets/header-img.svg'


const data = [
  {
    id: 1,
    image: IMG,
    title: 'Angular_pokemon',
    github: 'https://github.com/JOKE26/Angular_pokemon',
  },
  {
    id: 2,
    image: IMG,
    title: 'Flutter_dart-flutter',
    github: 'https://github.com/JOKE26/Flutter_dart-flutter',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mes récents travaux</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
              </div>
            </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio