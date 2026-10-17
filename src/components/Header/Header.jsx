import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo-full.png";
import "./Header.css";
import "../../styles/variables.css";
import "../../styles/global.css";

const links = [
  { to: "/", label: "Accueil", end: true },
  { to: "/services", label: "Services" },
  { to: "/modeles", label: "Modèles" },
  { to: "/devis", label: "Devis" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Ferme le menu mobile avec la touche Échap
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="header-container">
        <Link
          to="/"
          className="logo"
          aria-label="BerjouDigital, accueil"
          onClick={close}
        >
          <img src={logo} alt="" className="logo-img" />
        </Link>

        <nav
          id="menu-principal"
          className={`header-nav ${open ? "is-open" : ""}`}
          aria-label="Navigation principale"
        >
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} onClick={close}>
              {label}
            </NavLink>
          ))}
          <Link
            to="/devis"
            className="btn-header btn-header--mobile"
            onClick={close}
          >
            Démarrer
          </Link>
        </nav>

        <Link to="/devis" className="btn-header btn-header--desktop">
          Démarrer
        </Link>

        <button
          type="button"
          className={`burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
