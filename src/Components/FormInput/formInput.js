import React from 'react';
import './formInput.scss';

const FormInput = ({
  firstFirstName,
  secondFirstName,
  date,
  handleChange,
  handleChangeDate,
  handleChangeDays,
}) => {
  
  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(`firstFirstName: ${firstFirstName}`)
    console.log(`secondFirstName: ${secondFirstName}`)
    console.log(`date: ${date}`)
    const now = Date.now();
    const dateTimeStamp = Date.parse(date);
    const diff = ((now - dateTimeStamp) / 1000 / 86400);
    handleChangeDays(parseInt(diff, 10));
  }

  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    handleChange(value,name);
  }

  const handleOnChangeDate = (e) => {
    console.log(e.target.value)
    handleChangeDate(e.target.value)
    
  }
  return(
    <div className="formInput">
    <h1 className="formInput__title">Renseigner les deux prénoms qui composent le couple</h1>
    <form action="" className="formInput__form" onSubmit={handleOnSubmit}>
      <div className="formInput__form__inputs">
        <input 
          type="text" 
          name="firstFirstName" 
          id="firstFirstName" 
          placeholder="Prénom premier partenaire"
          className="formInput__form__input"
          required 
          value={firstFirstName}
          onChange={handleOnChange} 
          />
        <input 
          type="text" 
          name="secondFirstName" 
          id="secondFirstName"
          placeholder="Prénom second partenaire"
          className="formInput__form__input"
          required
          value={secondFirstName}
          onChange={handleOnChange} 
        />
      </div>
      <h1 className="formInput__title">Renseigner le début de votre relation</h1>
      <input 
        type="date" 
        name="date" 
        id="date"
        className="formInput__form__input"
        required
        value={date}
        onChange={handleOnChangeDate}
        // max= {`${today}`}
        />
      <div className="formInput__form__submit">
        <button type="submit" >Envoyer</button>
      </div>
    </form>
    </div>
);}

export default FormInput;
