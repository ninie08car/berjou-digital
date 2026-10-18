import { FaFileInvoice, FaClock, FaHandshake } from "react-icons/fa";
import "./Avis.css";

function Avis() {
  return (
    <section className="avis">
      <div className="container">
        <p className="eyebrow">Témoignages</p>
        <h2>Ce que pensent mes clients</h2>
        <p className="avis-intro">
          Chaque projet est réalisé avec soin afin d'offrir un site moderne,
          performant et facile à utiliser.
        </p>
        <div className="avis-grid">
          {/* <article className="avis-card">
            <p className="avis-texte">
              Avis fictif
              <br />« Annie a parfaitement compris nos attentes. Le résultat est
              élégant, clair et très professionnel. »
            </p>
            <h3>Marie D.</h3>
            <span>Artisane</span>
          </article>
          <article className="avis-card">
            <p className="avis-texte">
              Avis fictif
              <br />« Un accompagnement du début à la fin. Notre nouveau site
              inspire davantage confiance à nos clients. »
            </p>
            <h3>Thomas L.</h3>
            <span>Commerçant</span>
          </article>
          <article className="avis-card">
            <p className="avis-texte">
              Avis fictif
              <br />« Très à l'écoute et disponible. Le site est rapide, moderne
              et simple à administrer. »
            </p>
            <h3>Sophie M.</h3>
            <span>Association</span>
          </article> */}
          <article className="avis-card">
            <FaFileInvoice className="avis-icon" />
            <h3>Un devis clair</h3>
            <p>
              Un devis détaillé et sans surprise, pour que vous sachiez
              exactement ce que comprend votre projet avant de vous lancer.
            </p>
          </article>
          <article className="avis-card">
            <FaClock className="avis-icon" />
            <h3>Une réponse sous 48 h</h3>
            <p>
              Un interlocuteur unique qui répond rapidement à vos messages, de
              la première demande jusqu'à la mise en ligne.
            </p>
          </article>
          <article className="avis-card">
            <FaHandshake className="avis-icon" />
            <h3>Un suivi après la mise en ligne</h3>
            <p>
              Je reste disponible une fois votre site publié pour les
              corrections, les mises à jour et vos questions.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Avis;
