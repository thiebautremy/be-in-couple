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
  const separateByThree = (n) => {
    const stringToArray = [];
    stringToArray.push(n.slice(-3))
    stringToArray.push(n.slice(-6, -3))
    stringToArray.push(n.slice(-9, -6))
    return stringToArray.reverse();
  }

  return(
  <div className="statistiques">
    <section className="statistiques__section">
      <h1 className="statistiques__section__title">Depuis le début de votre relation :</h1>
      {/* NOMBRE DE MOIS, JOURS, HEURES */}
      <p className="statistiques__section__item">Vous êtes ensemble depuis <span>{separateByThree(`${parseInt(days / 30)}`).join(' ')} mois</span>, soit <span>{separateByThree(`${parseInt(days)}`).join(' ')} jours</span>, soit <span>{separateByThree(`${parseInt(days * 24)}`).join(' ')} heures</span>.
      </p>
      {/* NOMBRE D'HEURES DE SOMMEIL */}
      <p className="statistiques__section__item">Vous avez dormi ensemble environ <span>{separateByThree(`${parseInt(days *7.5)}`).join(' ')} heures</span>.
      </p>
      {/* NOMBRE DE DISPUTES */}
      <p className="statistiques__section__item">Vous vous êtes disputés environ <span>{separateByThree(`${parseInt(days / 364 * 312)}`).join(' ')} fois</span> !
      </p>
      {/* DISPUTES FAUTIF */}
      <p className="statistiques__section__item">Et <span>{separateByThree(`${parseInt(days / 364 * 312)}`).join(' ')} fois</span> c'était la faute de <span>{firstFirstName}</span> !
      N'est ce pas <span>{secondFirstName}</span> ?!
      </p>
      {/* NOMBRE DE REPAS PARTAGES */}
      <p className="statistiques__section__item">Vous avez partagé environ <span>{separateByThree(`${parseInt(days *2)}`).join(' ')} repas</span>.
      </p>
      {/* NOMBRE DE CINEMA */}
      <p className="statistiques__section__item">Vous êtes allés au cinéma ensemble environ <span>{separateByThree(`${parseInt(days / 364 * 1.7)}`).join(' ')} fois</span>.
      </p>
      {/* NOMBRE DE RESTO */}
      <p className="statistiques__section__item">Vous êtes allés au resto ensemble environ <span>{separateByThree(`${parseInt(days / 30 * 0.7)}`).join(' ')} fois</span>.
      </p>
      {/* NOMBRE DE COITS */}
      <p className="statistiques__section__item">Vous avez eu environ <span>{separateByThree(`${parseInt(days / 7 * 2.5)}`).join(' ')} rapports sexuels</span>.
      </p>
    </section>
    <button type="button" onClick={handleOnBack} className="statistiques__btn">Retour</button>
  </div>
);}
Statistiques.propTypes = {
  handleBack: PropTypes.func.isRequired,
}
export default Statistiques;
