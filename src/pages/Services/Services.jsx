import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    numero: "I",
    titre: "Pack Essentiel",
    prix: "À partir de 790 €",
    description:
      "Un site vitrine moderne, responsive et optimisé pour mettre en valeur votre activité et attirer de nouveaux clients.",
    options: [
      "Site vitrine jusqu'à 3 pages",
      "Design moderne",
      "Responsive (ordinateur, tablette, mobile)",
      "Formulaire de contact",
      "Intégration Google Maps (si besoin)",
      "Liens vers les réseaux sociaux",
      "SEO de base",
      "Mise en ligne",
    ],
  },
  {
    numero: "II",
    titre: "Pack professionnel",
    prix: "À partir de 1190 €",
    description:
      "Améliorez votre visibilité sur Google et attirez des clients proches de chez vous grâce à une stratégie de référencement local.",
    options: [
      "Jusqu'à 6pages",
      "Optimisation des performances",
      "Optimisation SEO plus poussée",
      "Galerie photos",
      "Formation rapide à la gestion du site",
      "Assistance après la mise en ligne pendant une période définie",
    ],
  },
  {
    numero: "III",
    titre: "Maintenance",
    prix: "À partir de 49 €/mois",
    description:
      "Je m'occupe des mises à jour et des petites évolutions afin que votre site reste toujours performant.",
    options: ["Mises à jour", "Corrections", "Petites modifications"],
  },
  {
    numero: "IV",
    titre: "Refonte",
    prix: "À partir de 45 €/mois",
    description: "Je m'occupe de moderniser votre site existant",
    options: ["Modernisation"],
  },
];

function Services() {
  return (
    <>
      <section className="services-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>
            Trois prestations,
            <span> une seule exigence.</span>
          </h1>
          <p className="hero-text">
            Chaque projet est unique. Ensemble, nous trouvons la solution
            adaptée à votre activité et à votre budget.
          </p>
        </div>
      </section>
      <section className="services-list">
        <div className="container">
          {services.map((service) => (
            <article className="service" key={service.numero}>
              <div className="service-left">
                <span className="numero">{service.numero}</span>
                <h2>{service.titre}</h2>
                <p className="prix">{service.prix}</p>
              </div>
              <div className="service-center">
                <p>{service.description}</p>
              </div>
              <div className="service-right">
                <ul>
                  {service.options.map((option) => (
                    <li key={option}>✓ {option}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="services-cta">
        <div className="container">
          <p className="eyebrow">Et après ?</p>
          <h2>Parlons de votre projet.</h2>
          <p>Chaque devis est gratuit et sans engagement.</p>
          <Link to="/devis" className="btn-primary">
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
}

export default Services;
