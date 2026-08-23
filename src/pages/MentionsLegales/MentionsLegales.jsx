import "./Legal.css";

function MentionsLegales() {
  return (
    <section className="legal">
      <div className="container">
        <p className="eyebrow">Informations</p>
        <h1>Mentions légales</h1>
        <article>
          <h2>Éditeur du site</h2>
          <p>
            Le présent site est édité par <strong>BerjouDigital</strong>.
          </p>
          <p>Responsable de la publication : Annie Berjou </p>
          <p>Statut : Micro-entreprise</p>
          <p>Numéro SIREN : 108641069 </p>
          <p>Email : annie.berjou@gmail.com</p>
        </article>
        <article>
          <h2>Hébergement</h2>
          <p>Hébergeur : à compléter avant la mise en ligne.</p>
          <p>Adresse : à compléter.</p>
        </article>
        <article>
          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, images, logo,
            illustrations, graphismes, code source et éléments visuels) est
            protégé par le droit d'auteur.
          </p>
          <p>
            Toute reproduction, représentation, modification ou diffusion,
            totale ou partielle, sans autorisation préalable, est interdite.
          </p>
        </article>
        <article>
          <h2>Responsabilité</h2>
          <p>
            Les informations présentes sur ce site sont fournies à titre
            indicatif. BerjouDigital s'efforce de les maintenir à jour mais ne
            peut garantir leur exactitude permanente.
          </p>
        </article>
        <article>
          <h2>Contact</h2>
          <p>Pour toute question concernant ce site, vous pouvez écrire à :</p>
          <p>
            <strong>annie.berjou@gmail.com</strong>
          </p>
        </article>
        <article>
          <h2>Crédits</h2>
          <p>
            Design, développement et intégration réalisés par BerjouDigital.
          </p>
        </article>
      </div>
    </section>
  );
}

export default MentionsLegales;
