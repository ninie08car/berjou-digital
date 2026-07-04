import { Link } from "react-router-dom";
import "./ContactCTA.css";

function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container">
        <div className="cta-card">
          <p className="eyebrow">Prêt à démarrer ?</p>
          <h2>Donnons vie à votre projet web</h2>
          <p className="cta-description">
            Vous avez une idée, un projet ou souhaitez moderniser votre présence
            en ligne ? Discutons ensemble de vos besoins et créons un site qui
            vous ressemble.
          </p>
          <div className="cta-buttons">
            <Link to="/devis" className="btn-primary">
              Demander un devis
            </Link>
            <Link to="/contact" className="btn-secondary">
              Me contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
