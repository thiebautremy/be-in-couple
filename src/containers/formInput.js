import { connect } from 'react-redux';
import FormInput from '../Components/FormInput/formInput';
import { changeValue, changeDate, changeDays, changeIsValidate } from '../actions/app';

const mapStateToProps = (state) => ({
  firstFirstName : state.firstFirstName,
  secondFirstName: state.secondFirstName,
  date: state.date,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(changeValue(value, name))
  },
  handleChangeDate: (value) => {
    dispatch(changeDate(value))
  },
  handleChangeDays: (value) => {
    dispatch(changeDays(value))
  },
  handleIsValidate: () => {
    dispatch(changeIsValidate())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);