import React from 'react';
import { Link } from 'react-router-dom';
import './legalMentions.scss';

const LegalMentions = () => (
    <div className="legalMentions">
    <h1>
      Mentions légales
    </h1>
    <a href='https://www.freepik.com/vectors/background'>Background vector created by brgfx - www.freepik.com</a>
      <Link to="/"><button type="button">Retour</button></Link>
    </div>

);

export default LegalMentions;
