import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <span className="logo-berjou">Berjou</span>
            <span className="logo-digital">Digital</span>
          </div>
          <p>
            Création de sites internet pour artisans, commerçants, associations
            et particuliers.
          </p>
        </div>
        <div className="footer-column">
          <h3 className="eyebrow">Navigation</h3>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/modeles">Modèles</Link>
            </li>
            <li>
              <Link to="/devis">Devis</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="eyebrow">Contact</h3>
          <ul>
            <li>annie.berjou@gmail.com</li>
            <li>Micro-entreprise . France</li>
            <li>Réponse sous 48 h</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>
            @ {new Date().getFullYear()} BerjouDigital - Tous droits réservés
          </p>
          <span>Conçu avec soin</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
