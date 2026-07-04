import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    numero: "I",
    titre: "Création de site",
    prix: "À partir de 890 €",
    description:
      "Un site vitrine moderne, responsive et optimisé pour mettre en valeur votre activité et attirer de nouveaux clients.",
    options: [
      "Design personnalisé",
      "Jusqu'à 5 pages",
      "Formulaire de contact",
      "Responsive",
      "Optimisation SEO",
      "Mise en ligne",
    ],
  },
  {
    numero: "II",
    titre: "Référencement local",
    prix: "À partir de 390 €",
    description:
      "Améliorez votre visibilité sur Google et attirez des clients proches de chez vous grâce à une stratégie de référencement local.",
    options: [
      "Audit SEO",
      "Google Business",
      "Mots-clés locaux",
      "Optimisation technique",
      "Conseils personnalisés",
    ],
  },
  {
    numero: "III",
    titre: "Maintenance",
    prix: "À partir de 45 €/mois",
    description:
      "Je m'occupe des mises à jour, de la sécurité et des petites évolutions afin que votre site reste toujours performant.",
    options: [
      "Sauvegardes",
      "Mises à jour",
      "Sécurité",
      "Support",
      "Corrections",
    ],
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
