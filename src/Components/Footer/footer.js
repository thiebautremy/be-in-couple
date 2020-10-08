import React from 'react';
import SocialsLinks from '../SocialsLinks/socialsLinks';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <Link to="/legalMentions">
        <h1>Mentions légales</h1>
    </Link>
    <div className="footer__divider"></div>
      <SocialsLinks />
  </div>
  );

export default Footer;
