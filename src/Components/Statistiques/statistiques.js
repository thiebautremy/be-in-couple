import React from 'react';
import PropTypes from 'prop-types';
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
      <p className="statistiques__section__item">Vous êtes ensemble depuis <span>{parseInt(days / 30)} mois</span>, soit <span>{days} jours</span>, soit <span>{days * 24} heures</span>.
      </p>
      {/* NOMBRE D'HEURES DE SOMMEIL */}
      <p className="statistiques__section__item">Vous avez dormi ensemble environ <span>{parseInt(days * 7.5)} heures</span>.
      </p>
      {/* NOMBRE DE DISPUTES */}
      <p className="statistiques__section__item">Vous vous êtes disputés environ <span>{parseInt(days / 364 * 312)} fois</span> !
      </p>
      {/* DISPUTES FAUTIF */}
      <p className="statistiques__section__item">Et <span>{parseInt(days / 364 * 312)} fois</span> c'était la faute de <span>{firstFirstName}</span> !
      N'est ce pas <span>{secondFirstName}</span> ?!
      </p>
      {/* NOMBRE DE REPAS PARTAGES */}
      <p className="statistiques__section__item">Vous avez partagé environ <span>{parseInt(days * 2)} repas</span>.
      </p>
      {/* NOMBRE DE CINEMA */}
      <p className="statistiques__section__item">Vous êtes allés au cinéma ensemble environ <span>{parseInt(days / 364 *1.7)} fois</span>.
      </p>
      {/* NOMBRE DE RESTO */}
      <p className="statistiques__section__item">Vous êtes allés au resto ensemble environ <span>{parseInt(days / 30 * 0.7)} fois</span>.
      </p>
      {/* NOMBRE DE COITS */}
      <p className="statistiques__section__item">Vous avez eu environ <span>{parseInt(days / 7 * 2.5)} rapports sexuels</span>.
      </p>
    </section>
    <button type="button" onClick={handleOnBack} className="statistiques__btn">Retour</button>
  </div>
);}
Statistiques.propTypes = {
  handleBack: PropTypes.func.isRequired,
}
export default Statistiques;
