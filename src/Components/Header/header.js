import React from 'react';

import './header.scss';

const Header = () => (
  <div className="header">  
        <h1 className="header__title"><span>Be</span> in Couple</h1>
        <ul className="header__infos">
          <li>Combien de jours,</li> 
          <li>Combien d'heures,</li> 
          <li>Combien de rapports sexuels,</li> 
          <li>Combien de disputes,</li> 
          <li><span>Depuis que vous êtes ensemble ?</span></li>
        </ul>
  </div>
);

export default Header;
