import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Ce que je peux faire pour vous</h5>
      <h2>Mes Services</h2>

      <div className="container services_container">
        {/* Service 1 : Développement Web */}
        <article className="service">
          <div className="service_head">
            <h3>Développement Web</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Création de sites web performants, responsives et adaptés à tous
                les supports.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Développement front-end moderne avec React.js, Next.js,
                TailwindCSS...
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Back-end sécurisé et évolutif avec Node.js, Express, bases de
                données SQL/NoSQL.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Développement d'applications web sur mesure, adaptées à vos
                besoins métiers.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Optimisation SEO technique et amélioration des performances
                (vitesse, accessibilité).
              </p>
            </li>
          </ul>
        </article>

        {/* Service 2 : UI/UX & Design */}
        <article className="service">
          <div className="service_head">
            <h3>Design UI/UX</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Création de maquettes claires et intuitives (mobile & desktop).
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Conception d'interfaces orientées utilisateur avec une approche
                UX centrée sur les besoins.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Création de visuels graphiques pour vos supports de
                communication (Canva, Photoshop).
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
