import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/devis">Devis</Link>
      <Link to="/modeles">Modeles</Link>
      <Link to="/services">Services</Link>
    </nav>
  );
}

export default Footer;
