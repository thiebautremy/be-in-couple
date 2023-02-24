import React from "react";
import { Link } from "react-router-dom";
import "./legalMentions.scss";

const LegalMentions = () => (
  <div className="legalMentions">
    <article>
      <h1>Mentions légales</h1>
      <h2>Editeur :</h2>
      <p>Le site Be in couple est édité par THIEBAUT Rémy</p>
      <h2>Responsable de publication :</h2>
      <p>THIEBAUT Rémy</p>
      <h2>Traitement des données :</h2>
      <p>
        Aucunes données n'est collectées. Les données rentrées par l'utilisateur
        sont supprimées dès le rafraichissement de la page.
      </p>
      <p>
        Ce site est proposé en différents langages web (HTML5, Javascript, CSS,
        React, Redux ) pour un meilleur confort d’utilisation et un graphisme
        plus agréable, nous vous recommandons de recourir à des navigateurs
        modernes comme Google Chrome, Safari, Firefox, Edge, etc…
      </p>
      <h2>Images</h2>
      <p>
        Les images utilisées sont libre de droit est sont disponibles à ce lien
        :{" "}
        <a href="https://www.freepik.com/vectors/background">
          Background vector created by brgfx - www.freepik.com
        </a>
      </p>
    </article>
    <Link to="/">
      <button type="button">Retour</button>
    </Link>
  </div>
);

export default LegalMentions;
