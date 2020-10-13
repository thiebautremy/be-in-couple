import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';

import Particles from 'react-particles-js';
import './page404.scss';

const Page404 = () => {
  
  const [redirect, setRedirect] = useState(false);

  return (
  <div className="page404">
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
  className="page404__particles"
  />
   <section className="page404__section">
     <h1 className="page404__section__title">Vous ne vous seriez pas un peu perdu par hasard ???</h1>
     <h1 className="page404__section__title">Allez...je vous aide à retourner à la page d'accueil :</h1>
         <button 
          type="button" 
          className="page404__section__btn"
          onClick={() => setRedirect(true)}
          >
          Retour à l'accueil
        </button> 
   </section>
   {redirect && <Redirect to ="/"/> }
  </div>
)};

export default Page404;
