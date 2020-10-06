import React from 'react';
import FormInput from '../../containers/formInput';
import Statistiques from '../../containers/statistiques';
import './display.scss';

const Display = () => {
  return(
  <div className="display">
      <FormInput />
      <Statistiques />
  </div>
);}

export default Display;
