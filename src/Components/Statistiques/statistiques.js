import React from 'react';
import './statistiques.scss';

const Statistiques = ({days}) => (
  <div className="statistiques">
  <h1>Depuis le début de votre relation :</h1>
    <h2>Vous êtes ensemble depuis {days / 30}, soit {days} jours, soit {days * 24} heures</h2>
    <h2>Vous avez dormi ensemble 35 000 heures</h2>
    <h2>Vous vous êtes disputé 312 fois !</h2>
    <h2>Vous avez partagé 1 500 repas</h2>
    <h2>Vous êtes allé au cinéma ensemble environ 50 fois</h2>
    <h2>Vous avez été au resto ensemble environ 20 fois</h2>
    <h2>Vous avez eu 150 rapports sexuels</h2>
  </div>
);

export default Statistiques;
