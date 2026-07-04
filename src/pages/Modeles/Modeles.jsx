import { Link } from "react-router-dom";
import "./Modeles.css";

import artisan from "../../assets/images/model-artisan.jpg";
import commerce from "../../assets/images/model-commercant.jpg";
import association from "../../assets/images/model-association.jpg";

const modeles = [
  {
    image: artisan,
    categorie: "Artisans",
    titre: "Le Savoir-Faire",
    description:
      "Un site élégant pour présenter votre atelier, vos réalisations et votre histoire.",
    options: [
      "Galerie photos",
      "Présentation de l'entreprise",
      "Prise de rendez-vous",
      "Carte interactive",
    ],
  },

  {
    image: commerce,
    categorie: "Commerçants",
    titre: "La Boutique",
    description:
      "Valorisez vos produits, vos horaires et votre commerce grâce à un site moderne.",
    options: [
      "Catalogue produits",
      "Click & Collect",
      "Horaires",
      "Newsletter",
    ],
  },

  {
    image: association,
    categorie: "Associations",
    titre: "La Communauté",
    description:
      "Un site pensé pour présenter vos actions et faciliter la vie de vos adhérents.",
    options: ["Agenda", "Adhésion", "Actualités", "Dons"],
  },
];

function Modeles() {
  return (
    <>
      <section className="modeles-hero">
        <div className="container">
          <p className="eyebrow">Modèles</p>
          <h1>
            Des modèles pensés
            <span> pour votre activité.</span>
          </h1>
          <p className="hero-description">
            Chaque modèle est entièrement personnalisable afin de créer un site
            unique à votre image.
          </p>
        </div>
      </section>
      <section className="modeles-list">
        <div className="container">
          {modeles.map((modele, index) => (
            <article
              className={`modele ${index % 2 !== 0 ? "reverse" : ""}`}
              key={modele.titre}
            >
              <div className="modele-image">
                <img src={modele.image} alt={modele.titre} />
              </div>
              <div className="modele-content">
                <p className="eyebrow">{modele.categorie}</p>
                <h2>{modele.titre}</h2>
                <p className="description">{modele.description}</p>
                <ul>
                  {modele.options.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
                <Link to="/devis" className="btn-modele">
                  Adapter ce modèle
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Modeles;
