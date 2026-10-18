import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [envoye, setEnvoye] = useState(false);
  const [erreur, setErreur] = useState("");
  const [envoiEnCours, setEnvoiEnCours] = useState(false);

  const envoyer = async (e) => {
    e.preventDefault();
    setErreur("");
    setEnvoiEnCours(true);

    try {
      const reponse = await fetch(
        "https://formsubmit.co/ajax/contact@berjoudigital.fr",
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
        "L'envoi a échoué. Vérifiez votre connexion et réessayez, ou écrivez directement à contact@berjoudigital.fr.",
      );
    } finally {
      setEnvoiEnCours(false);
    }
  };

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Une question ? Écrivez-moi.</h1>
          <p>
            Un renseignement, une idée, un doute avant de vous lancer : je vous
            réponds avec plaisir.
          </p>
        </div>
      </section>
      <section className="contact-page">
        <div className="container contact-grid">
          <aside>
            <div className="contact-info">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>E-mail</h3>
                <p>
                  <a href="mailto:contact@berjoudigital.fr">
                    contact@berjoudigital.fr
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-info">
              <FaClock className="contact-icon" />
              <div>
                <h3>Délai de réponse</h3>
                <p>Sous 48 h</p>
              </div>
            </div>
            <div className="contact-info">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Où me trouver</h3>
                <p>Micro-entreprise · France</p>
              </div>
            </div>
            <p className="contact-devis">
              Vous avez un projet précis ?{" "}
              <Link to="/devis">Demander un devis</Link>
            </p>
          </aside>
          <div>
            {envoye ? (
              <div className="merci">
                <h2>Merci !</h2>
                <p>
                  Votre message a bien été envoyé. Je vous réponds sous 48 h.
                </p>
              </div>
            ) : (
              <form onSubmit={envoyer}>
                <input
                  type="hidden"
                  name="_subject"
                  value="Nouveau message depuis la page Contact"
                />
                {/* champ piège anti-spam : invisible pour les vrais visiteurs */}
                <input
                  type="text"
                  name="_honey"
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />
                <div className="ligne">
                  <input name="nom" type="text" placeholder="Nom" required />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <input
                  className="contact-sujet"
                  name="sujet"
                  type="text"
                  placeholder="Sujet"
                  required
                />
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Votre message..."
                  required
                />
                {erreur && <p role="alert">{erreur}</p>}
                <button
                  className="btn-primary"
                  type="submit"
                  disabled={envoiEnCours}
                >
                  {envoiEnCours ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
