import React from 'react';
import { Icon } from 'semantic-ui-react';
import './socialsLinks.scss';

const SocialsLinks = () => (
    <div className="socialsLinks">
      <h2>Suivez-moi : </h2>
              <div className="socialsLinks__link">
                <a href="https://www.instagram.com/tr_code/" target="_blank" rel="noopener noreferrer"><Icon name="instagram" size="huge"/></a>
              </div>
              <div className="socialsLinks__link">
                <a href="https://www.linkedin.com/in/remy-thiebaut/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size="huge"/></a>
              </div>
    </div>
);

export default SocialsLinks;
