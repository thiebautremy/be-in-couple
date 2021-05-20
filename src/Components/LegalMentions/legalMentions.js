import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import './legalMentions.scss';

const LegalMentions = () => (
    <div className="legalMentions">
    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 100,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
	        "line_linked": {
	            "enable": false,
	            "opacity": 0.02
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.05
	        },
	        "size": {
	            "value": 2
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.05
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 2
	            }
	        }
	    },
	    "retina_detect": true
	}} 
  className="legalMentions__particles"
  />
    <article>
    <h1>
      Mentions légales
    </h1>
    <h2>Editeur :</h2>
      <p>Le site Be in couple est édité par THIEBAUT Rémy</p>
    <h2>Responsable de publication :</h2>
      <p>THIEBAUT Rémy</p>
    <h2>Traitement des données :</h2>
      <p>Aucunes données n'est collectées. Les données rentrées par l'utilisateur sont supprimées dès le rafraichissement de la page.</p>
      <p>Ce site est proposé en différents langages web (HTML5, Javascript, CSS, React, Redux ) pour un meilleur confort d’utilisation et un graphisme plus agréable, nous vous recommandons de recourir à des navigateurs modernes comme Google Chrome, Safari, Firefox, Edge, etc…</p>
    <h2>Images</h2>
      <p>Les images utilisées sont libre de droit est sont disponibles à ce lien : <a href='https://www.freepik.com/vectors/background'>Background vector created by brgfx - www.freepik.com</a></p>
    </article>    
      <Link to="/"><button type="button">Retour</button></Link>
    </div>

);

export default LegalMentions;
