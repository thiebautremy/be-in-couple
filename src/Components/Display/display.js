import React from "react";
import PropTypes from "prop-types";
import FormInput from "../../containers/formInput";
import Statistiques from "../../containers/statistiques";
import "./display.scss";

const Display = ({ isValide }) => {
  return (
    <div className="display">{isValide ? <Statistiques /> : <FormInput />}</div>
  );
};

Display.propTypes = {
  isValide: PropTypes.bool.isRequired,
};
export default Display;
