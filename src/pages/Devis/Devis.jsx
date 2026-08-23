import { useState } from "react";
import "./Devis.css";

function Devis() {
  const [envoye, setEnvoye] = useState(false);
  const [erreur, setErreur] = useState("");
  const [envoiEnCours, setEnvoiEnCours] = useState(false);

  const envoyer = async (e) => {
    e.preventDefault();
    setErreur("");
    setEnvoiEnCours(true);

    try {
      const reponse = await fetch(
        "https://formsubmit.co/ajax/annie.berjou@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            Object.fromEntries(new FormData(e.currentTarget)),
          ),
        },
      );

      if (!reponse.ok) {
        throw new Error("Échec de l'envoi");
      }

      setEnvoye(true);
    } catch {
      setErreur(
        "L'envoi a échoué. Vérifiez votre connexion et réessayez, ou écrivez directement à annie.berjou@gmail.com.",
      );
    } finally {
      setEnvoiEnCours(false);
    }
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
                  <input name="nom" type="text" placeholder="Nom" required />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="ligne">
                  <input name="telephone" type="tel" placeholder="Téléphone" />
                  <input
                    name="entreprise"
                    type="text"
                    placeholder="Entreprise"
                  />
                </div>
                <select name="projet" defaultValue="" required>
                  <option value="" disabled>
                    Type de projet
                  </option>
                  <option value="Création de site">Création de site</option>
                  <option value="Refonte">Refonte</option>
                  <option value="SEO">SEO</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
                <select name="budget" defaultValue="">
                  <option value="">Budget</option>
                  <option value="-1000€">-1000€</option>
                  <option value="1000-2500€">1000-2500€</option>
                  <option value="2500-5000€">2500-5000€</option>
                  <option value="+5000€">+5000€</option>
                </select>
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Parlez-moi de votre projet..."
                />
                {erreur && <p role="alert">{erreur}</p>}
                <button
                  className="btn-primary"
                  type="submit"
                  disabled={envoiEnCours}
                >
                  {envoiEnCours ? "Envoi en cours..." : "Envoyer la demande"}
                </button>
              </form>
            )}
          </main>
        </div>
      </section>
    </>
  );
}

export default Devis;
