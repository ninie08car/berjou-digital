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
          <article className="avis-card">
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
          </article>
        </div>
      </div>
    </section>
  );
}

export default Avis;
