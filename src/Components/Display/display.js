import React from 'react';
import FormInput from '../../containers/formInput';
import Statistiques from '../../containers/statistiques';
import './display.scss';

const Display = ({isValide}) => {
  console.log(isValide)
  return(
    <div className="display">
      {isValide? <Statistiques /> : <FormInput />} 
    </div>
  )
}

export default Display; 
