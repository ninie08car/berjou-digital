import { Link } from "react-router-dom";
import { FaLaptopCode, FaPaintBrush, FaTools } from "react-icons/fa";
import "./Services.css";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <p className="eyebrow">Mes services</p>
        <h2>Des solutions adaptées à votre activité</h2>
        <p className="services-intro">
          Chaque projet est conçu pour répondre à vos besoins avec un design
          soigné, un site rapide et une expérience utilisateur agréable.
        </p>
        <div className="services-grid">
          <article className="service-card">
            <FaLaptopCode className="service-icon" />
            <h3>Site vitrine</h3>
            <p>
              Présentez votre activité avec un site moderne, responsive et
              optimisé pour le référencement.
            </p>
          </article>
          <article className="service-card">
            <FaPaintBrush className="service-icon" />
            <h3>Refonte de site</h3>
            <p>
              Modernisez votre ancien site afin d'améliorer son design, sa
              rapidité et son efficacité.
            </p>
          </article>
          <article className="service-card">
            <FaTools className="service-icon" />
            <h3>Maintenance</h3>
            <p>
              Mises à jour, corrections et accompagnement pour garder votre site
              toujours performant.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;
