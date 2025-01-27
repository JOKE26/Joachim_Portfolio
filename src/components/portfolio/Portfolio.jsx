import React from "react";
import "./portfolio.css";
import IMG from "../../assets/header-img.svg";

const data = [
  {
    id: 1,
    image: IMG,
    title: "SAMBO NETWORK",
    description: "Site web réalisé avec Elementor sur WordPress",
    demo: "https://sambonetwork.fr/",
  },
  {
    id: 2,
    image: IMG,
    title: "Pharmacie du Port de Pantin",
    description: "Site Web réalisé avec Elementor sur WordPress",
    demo: "https://pharmacieduportdepantin.com/",
  },
  {
    id: 3,
    image: IMG,
    title: "La Plume Industry",
    description: "Site e-commerce réalisé grâce à Shopify",
    demo: "https://laplumeindustry.com/",
  },
  {
    id: 4,
    image: IMG,
    title: "Angular_pokemon",
    description: "Projet réalisé avec Angular et présent sur mon Github",
    github: "https://github.com/JOKE26/Angular_pokemon",
  },
  {
    id: 5,
    image: IMG,
    title: "Flutter_dart-flutter",
    description: "Projet réalisé avec Flutter et présent sur mon Github",
    github: "https://github.com/JOKE26/Flutter_dart-flutter",
  },
];

const PortfolioItem = ({ id, image, title, github, description, demo }) => {
  return (
    <article key={id} className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <div className="portfolio__item-cta">
        {github && (
          <a
            href={github}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Voir le code source de ${title}`}
          >
            Voir le projet
          </a>
        )}
        {demo && (
          <a
            href={demo}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Voir la démo de ${title}`}
          >
            Voir la démo
          </a>
        )}
      </div>
    </article>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mes récents travaux</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((project) => (
          <PortfolioItem key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
