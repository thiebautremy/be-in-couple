import React from 'react';
import PropTypes from 'prop-types';
import './formInput.scss';
import moment from 'moment';

const FormInput = ({
  firstFirstName,
  secondFirstName,
  date,
  handleChange,
  handleChangeDate,
  handleChangeDays,
  handleIsValidate,
}) => {
  
  const handleOnSubmit = (e) => {
    e.preventDefault()
    const now = Date.now();
    const dateTimeStamp = Date.parse(date);
    const diff = ((now - dateTimeStamp) / 1000 / 86400);
    handleChangeDays(parseInt(diff, 10));
    handleIsValidate();
  }

  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    handleChange(value.toUpperCase(),name);
  }

  const handleOnChangeDate = (e) => {
    handleChangeDate(e.target.value)
    
  }
  // TRANSFORMATION DU FORMAT DE LA DATE DU JOUR POUR LE METTRE EN PARAMETRE MAX DU CALENDRIER
  const day = moment(Date.now()).format('DD')
  const month = moment(Date.now()).format('M');
  const year = moment(Date.now()).format('YYYY');
  const maxDate = `${year}-${month}-${day}`
  return(
    <div className="formInput">
    <h1 className="formInput__title">Renseignez les deux prénoms qui composent le couple</h1>
    <form action="" className="formInput__form" onSubmit={handleOnSubmit}>
      <div className="formInput__form__inputs">
        <input 
          type="text" 
          name="firstFirstName" 
          id="firstFirstName" 
          placeholder="1er Prénom"
          className="formInput__form__input"
          required 
          value={firstFirstName}
          onChange={handleOnChange} 
          />
        <input 
          type="text" 
          name="secondFirstName" 
          id="secondFirstName"
          placeholder="2ième Prénom"
          className="formInput__form__input"
          required
          value={secondFirstName}
          onChange={handleOnChange} 
        />
      </div>
      <h1 className="formInput__title">Renseignez le début de votre relation</h1>
      <input 
        type="date" 
        name="date" 
        id="date"
        className="formInput__form__input"
        required
        value={date}
        onChange={handleOnChangeDate}
        max= {`${maxDate}`}
        />
      <div className="formInput__form__submit">
        <button type="submit" >Calculer</button>
      </div>
    </form>
    </div>
);}
FormInput.propTypes = {
  firstFirstName: PropTypes.string.isRequired,
  secondFirstName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleChangeDate: PropTypes.func.isRequired,
  handleChangeDays: PropTypes.func.isRequired,
  handleIsValidate: PropTypes.func.isRequired,
}
export default FormInput;
