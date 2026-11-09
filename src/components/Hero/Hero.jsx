import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../../assets/images/hero-workspace.webp";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="eyebrow">Studio web indépendant</p>
          <h1>Création de sites internet à Agen et dans le Lot-et-Garonne</h1>
          <p className="hero-description">
            BerjouDigital accompagne les artisans, commerçants et petites
            entreprises dans la création de sites internet modernes,
            professionnels et adaptés à leurs besoins.
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
