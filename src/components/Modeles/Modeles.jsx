import { Link } from "react-router-dom";
import "./Modeles.css";

function Modeles() {
  return (
    <section className="modeles">
      <div className="container">
        <p className="eyebrow">Nos modèles</p>
        <h2>Des modèles pensés pour chaque activité</h2>
        <p className="modeles-intro">
          Choisissez un modèle adapté à votre métier. Chaque site est
          entièrement personnlisable selon vos couleurs, votre logo et vos
          besoins.
        </p>
        <div className="modeles-grid">
          <article className="modele-card">
            <img
              src="../../assets/images/model-artisan.jpg"
              alt="Modèle Artisan"
            />
            <div className="modele-content">
              <h3>Artisans</h3>
              <p>
                Idéal pour présenter vos réalisations, vos services et permettre
                à vos clients de vous contacter facilement.
              </p>
              <Link to="/modeles" className="btn-modele">
                Découvrir
              </Link>
            </div>
          </article>
          <article className="modele-card">
            <img
              src="../../assets/images/model-commercant.jpg"
              alt="Modèle Commerce"
            />
            <div className="modele-content">
              <h3>Commerçants</h3>
              <p>
                Valorisez votre boutique, vos produits et vos horaires grâce à
                un site moderne et responsive.
              </p>
              <Link to="/modeles" className="btn-modele">
                Découvrir
              </Link>
            </div>
          </article>
          <article className="modele-card">
            <img
              src="../../assets/images/model-association.jpg"
              alt="Modèle Association"
            />
            <div className="modele-content">
              <h3>Associations</h3>
              <p>
                Présentez vos actions, vos événements et facilitez les
                inscriptions de vos adhérents.
              </p>
              <Link to="/modeles" className="btn-modele">
                Découvrir
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Modeles;
