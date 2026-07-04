import { useState } from "react";
import "./Devis.css";

function Devis() {
  const [envoye, setEnvoye] = useState(false);

  const envoyer = (e) => {
    e.preventDefault();

    // Ici tu mettras EmailJS plus tard

    setEnvoye(true);
  };

  return (
    <>
      <section className="devis-hero">
        <div className="container">
          <p className="eyebrow">Demande de devis</p>
          <h1>Parlons de votre projet.</h1>
          <p>
            Quelques informations suffisent pour préparer un devis personnalisé.
          </p>
        </div>
      </section>
      <section className="devis">
        <div className="container devis-grid">
          <aside>
            <div className="etape">
              <span>01</span>
              <h3>Échange</h3>
              <p>Nous discutons ensemble de votre projet.</p>
            </div>
            <div className="etape">
              <span>02</span>
              <h3>Devis</h3>
              <p>Vous recevez une proposition détaillée.</p>
            </div>
            <div className="etape">
              <span>03</span>
              <h3>Création</h3>
              <p>Nous lançons votre site.</p>
            </div>
          </aside>
          <main>
            {envoye ? (
              <div className="merci">
                <h2>Merci !</h2>
                <p>Votre demande a bien été envoyée.</p>
              </div>
            ) : (
              <form onSubmit={envoyer}>
                <div className="ligne">
                  <input type="text" placeholder="Nom" required />
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="ligne">
                  <input type="tel" placeholder="Téléphone" />
                  <input type="text" placeholder="Entreprise" />
                </div>
                <select required>
                  <option>Type de projet</option>
                  <option>Création de site</option>
                  <option>Refonte</option>
                  <option>SEO</option>
                  <option>Maintenance</option>
                </select>
                <select>
                  <option>Budget</option>
                  <option>-1000€</option>
                  <option>1000-2500€</option>
                  <option>2500-5000€</option>
                  <option>+5000€</option>
                </select>
                <textarea
                  rows="7"
                  placeholder="Parlez-moi de votre projet..."
                />
                <button className="btn-primary">Envoyer la demande</button>
              </form>
            )}
          </main>
        </div>
      </section>
    </>
  );
}

export default Devis;
