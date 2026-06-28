import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../../assets/images/hero-workspace.webp";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="eyebrow">Studio web indépendant</p>
          <h1>
            Des sites internet élégants pour les artisans, commerçants,
            indépendants et particuliers.
          </h1>
          <p className="hero-description">
            Je crée des sites modernes, rapides et faciles à utiliser afin de
            mettre en valeur votre activité et attirer de nouveaux clients.
          </p>
          <div className="hero-buttons">
            <Link to="/devis" className="btn-primary">
              Demander un devis
            </Link>
            <Link to="/modeles" className="btn-secondary">
              Voir les modèles
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Création de sites web BerjouDigital" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
