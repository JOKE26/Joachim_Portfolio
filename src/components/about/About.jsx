import React from "react";
import "./about.css";
import ME from "../../assets/contact-img.svg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderOpened } from "react-icons/vsc";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Faisons Connaissance</h5>
      <h2>À propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Moi en action" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Expérience</h5>
              <small>
                <b>Plus de 3 ans</b> d'expérience professionnelles
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Entreprises</h5>
              <small>
                <b>VML</b>
                <br />
                <b>ALECOL</b>
                <br />
                <b>SKYRAN-GROUP</b>
              </small>
            </article>
            <article className="about__card">
              <VscFolderOpened className="about__icon" />
              <h5>Projets</h5>
              <small>
                J'ai déjà travaillé sur de nombreux projets qu'ils soient
                personnels ou professionnels
              </small>
            </article>
          </div>

          <p>
            En tant que Développeur Web, je maîtrise plusieurs langages clés,
            notamment TypeScript, JavaScript, Python ainsi que des frameworks
            comme React.js ou Next.js. Toujours en quête d'innovation, j'aime
            travailler sur des projets passionnants et ambitieux. 💻
          </p>

          <a href="#contact" className="btn btn-primary">
            Alors, on discute!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
