import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/devis">Devis</Link>
      <Link to="/modeles">Modeles</Link>
      <Link to="/services">Services</Link>
    </nav>
  );
}

export default Header;
