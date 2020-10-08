import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../containers/formInput';
import Statistiques from '../../containers/statistiques';
import Particles from 'react-particles-js';
import './display.scss';

const Display = ({isValide}) => {
  return(
    <div className="display">
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
  className="display__particles"
  />
      {isValide? <Statistiques /> : <FormInput />} 
    </div>
  )
}

Display.propTypes = {
  isValide: PropTypes.bool.isRequired,
}
export default Display; 
