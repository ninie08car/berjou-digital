import "./Hero.css";

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
            <a href="/devis" className="btn-secondary">
              Demander un devis
            </a>
            <a href="/modeles" className="btn-secondary">
              Voir les modèles
            </a>
          </div>
        </div>
        <div className="hero-image">
          {/* Ici on ajoutera une image plus tard */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
