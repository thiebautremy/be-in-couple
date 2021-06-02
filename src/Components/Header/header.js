import React from 'react';

import './header.scss';

const Header = () => (
  <div className="header">  
        <div class="header_text">
          <h1 className="header__title">
            <span>Be</span> 
            in Couple
          </h1>
          <div className="header__infos">
            <p>Combien de jours,</p> 
            <p>Combien d'heures,</p> 
            <p>Combien de rapports sexuels,</p> 
            <p>Combien de disputes,</p> 
            <p><span>Depuis que vous êtes ensemble ?</span></p>
          </div>
        </div>
  </div>
);

export default Header;
