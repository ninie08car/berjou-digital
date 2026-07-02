import { Link } from "react-router-dom";
import "./PourquoiMoi.css";

function PourquoiMoi() {
  return (
    <section className="pourquoimoi">
      <div className="container">
        <p className="eyebrow">Pourquoi Berjou Digital?</p>
        <h2>Un accompagnement humain, simple et efficace</h2>
        <p className="pourquoi-intro">
          Je vous accompagne de la première idée jusqu'à la mise en ligne de
          votre site internet, avec des solutions adaptées à votre activité et à
          votre budget.
        </p>
        <div className="pourquoi-grid">
          <article className="pourquoi-card">
            <h3>🎨 Un design moderne</h3>
            <p>
              Des interfaces élégantes qui inspirent confiance et mettent votre
              activité en valeur.
            </p>
          </article>
          <article className="pourquoi-card">
            <h3>📱 Responsive</h3>
            <p>
              Votre site sera parfaitement lisible sur ordinateur, tablette et
              smartphone.
            </p>
          </article>

          <article className="pourquoi-card">
            <h3>🚀 Performances</h3>
            <p>
              Des pages rapides pour offrir une meilleure expérience utilisateur
              et favoriser le référencement.
            </p>
          </article>

          <article className="pourquoi-card">
            <h3>💬 Un accompagnement</h3>
            <p>
              Un interlocuteur unique, des échanges simples et un suivi
              personnalisé avant et après la mise en ligne.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default PourquoiMoi;
