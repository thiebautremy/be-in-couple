import React from 'react';
import './statistiques.scss';

const Statistiques = ({
  days, 
  handleBack, 
  firstFirstName,
  secondFirstName,
}) => {
  const handleOnBack = () => {
    handleBack();
  }
  return(
  <div className="statistiques">
    <section className="statistiques__section">
      <h1 className="statistiques__section__title">Depuis le début de votre relation :</h1>
      {/* NOMBRE DE MOIS, JOURS, HEURES */}
      <h2 className="statistiques__section__item">Vous êtes ensemble depuis <span>{parseInt(days / 30)} mois</span>, soit <span>{days} jours</span>, soit <span>{days * 24} heures</span>.
      </h2>
      {/* NOMBRE D'HEURES DE SOMMEIL */}
      <h2 className="statistiques__section__item">Vous avez dormi ensemble environ <span>{parseInt(days * 7.5)} heures</span>.
      </h2>
      {/* NOMBRE DE DISPUTES */}
      <h2 className="statistiques__section__item">Vous vous êtes disputés environ <span>{parseInt(days / 364 * 312)} fois</span> !
      </h2>
      {/* DISPUTES FAUTIF */}
      <h2 className="statistiques__section__item">Et <span>{parseInt(days / 364 * 312)} fois</span> c'était la faute de <span>{firstFirstName}</span> !
      N'est ce pas <span>{secondFirstName}</span> ?!
      </h2>
      {/* NOMBRE DE REPAS PARTAGES */}
      <h2 className="statistiques__section__item">Vous avez partagé environ <span>{parseInt(days * 2)} repas</span>.
      </h2>
      {/* NOMBRE DE CINEMA */}
      <h2 className="statistiques__section__item">Vous êtes allés au cinéma ensemble environ <span>{parseInt(days / 364 *1.7)}fois</span>.
      </h2>
      {/* NOMBRE DE RESTO */}
      <h2 className="statistiques__section__item">Vous êtes allés au resto ensemble environ <span>{parseInt(days / 30 * 0.7)} fois</span>.
      </h2>
      {/* NOMBRE DE COITS */}
      <h2 className="statistiques__section__item">Vous avez eu environ <span>{parseInt(days / 7 * 2.5)} rapports sexuels</span>.
      </h2>
    </section>
    <button type="button" onClick={handleOnBack} className="statistiques__btn">Retour</button>
  </div>
);}

export default Statistiques;
