import React, {useState} from 'react';
 
import "react-datepicker/dist/react-datepicker.css";
import './formInput.scss';

const FormInput = () => {
  const [firstFirstName, setFirstFirstName] = useState('');
  const [secondFirstName, setSecondFirstName] = useState('');
  const [date, setDate] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(`firstFirstName: ${firstFirstName}`)
    console.log(`secondFirstName: ${secondFirstName}`)
    console.log(`date: ${date}`)
    setDate('');
    setFirstFirstName('');
    setSecondFirstName('');
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
        onChange={(e)=>setFirstFirstName(e.target.value)} 
        />
      <input 
        type="text" 
        name="secondFirstName" 
        id="secondFirstName"
        placeholder="Prénom second partenaire"
        className="formInput__form__input"
        required
        value={secondFirstName}
        onChange={(e)=>setSecondFirstName(e.target.value)} 
      />
    </div>
    <h1 className="formInput__title">Renseigner votre date de mise en couple</h1>
    <input 
      type="date" 
      name="date" 
      id="date"
      className="formInput__form__input"
      required
      value={date}
      onChange={(e)=>setDate(e.target.value)}
      // max="today"
      />
    <div className="formInput__form__submit">
      <button type="submit" >Envoyer</button>
    </div>
  </form>
  </div>
);}

export default FormInput;
