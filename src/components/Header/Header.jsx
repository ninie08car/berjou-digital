import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import "./Header.css";
import "../../styles/variables.css";
import "../../styles/global.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="logo-berjou" />
          {/* <span className="logo-berjou">Berjou</span>
          <span className="logo-digital">Digital</span> */}
        </Link>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/services">Services</Link>
          <Link to="/modeles">Modèles</Link>
          <Link to="/devis">Devis</Link>
        </nav>
        <Link to="/devis" className="btn-header">
          Démarrer
        </Link>
      </div>
    </header>
  );
}

export default Header;
