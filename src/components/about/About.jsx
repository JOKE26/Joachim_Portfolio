import React from "react";
import "./about.css";
import ME from "../../assets/contact-img.svg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderOpened } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Présentation</h5>
      <h2>Qui suis-je ?</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Joachim Degboe - Développeur Web Freelance" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Expertise</h5>
              <small>
                <strong>+3 ans</strong> d'expérience en Développement Web
              </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients & Missions</h5>
              <small>Otodec, Total Énergie, Danone, ALECOL, SKYRAN-GROUP</small>
            </article>

            <article className="about__card">
              <VscFolderOpened className="about__icon" />
              <h5>Projets réalisés</h5>
              <small>
                Sites vitrines, e-commerce, apps web interactives & plus encore
              </small>
            </article>
          </div>

          <p>
            Je suis <strong>Joachim</strong>, Développeur Web Freelance basé à
            Paris. J'accompagne entreprises, marques et entrepreneurs dans la
            création de
            <strong> solutions digitales sur mesure</strong> : Sites vitrines,
            e-commerce, SEO-friendly, animations web, landing pages.
          </p>

          <p>
            Réactif, autonome et orienté résultats, je m'investis pleinement
            dans chaque projet pour livrer des expériences à la hauteur des
            attentes. Mon approche allie <strong>expertise technique </strong>
            et <strong>créativité</strong>, avec un souci constant du détail et
            de l'expérience utilisateur.
          </p>

          <a href="#contact" className="btn btn-primary">
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
