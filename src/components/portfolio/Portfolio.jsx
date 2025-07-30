import React from "react";
import "./portfolio.css";
import sambo from "../../assets/sambo.png";
import pharma from "../../assets/pharma-pantin.png";
import plume from "../../assets/plume.png";
import otodec from "../../assets/otodec.png"; // 🔧 À ajouter dans tes assets

const data = [
  {
    id: 1,
    image: sambo,
    title: "Sambo Network",
    description: "Site vitrine réalisé avec Elementor (WordPress)",
    role: "Intégration complète et mise en ligne",
    demo: "https://sambonetwork.fr/",
  },
  {
    id: 2,
    image: pharma,
    title: "Pharmacie du Port de Pantin",
    description: "Site vitrine responsive via WordPress",
    role: "Refonte et optimisation SEO locale",
    demo: "https://pharmacieduportdepantin.com/",
  },
  {
    id: 3,
    image: plume,
    title: "La Plume Industry",
    description: "Boutique e-commerce développée avec Shopify",
    role: "Paramétrage, design & publication",
    demo: "https://laplumeindustry.com/",
  },
  {
    id: 4,
    image: otodec,
    title: "Otodec",
    description:
      "Site sur mesure en cours de développement (React/Nextjs + Node.js)",
    role: "Développement complet – Front & Back",
    demo: "", // Pas encore en ligne
  },
];

const PortfolioItem = ({
  id,
  image,
  title,
  description,
  role,
  github,
  demo,
}) => (
  <article key={id} className="portfolio__item">
    <div className="portfolio__item-image">
      <img src={image} alt={title} />
    </div>
    <div className="portfolio__item-text">
      <h3>{title}</h3>
      <p className="portfolio__description">{description}</p>
      <p className="portfolio__role">
        <strong>Mon rôle :</strong> {role}
      </p>
    </div>
    <div className="portfolio__item-cta">
      {github && (
        <a
          href={github}
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code source
        </a>
      )}
      {demo ? (
        <a
          href={demo}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le site
        </a>
      ) : (
        <span className="portfolio__tag">En cours de développement</span>
      )}
    </div>
  </article>
);

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Quelques exemples de réalisations</h5>
      <h2>Mon Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((project) => (
          <PortfolioItem key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
