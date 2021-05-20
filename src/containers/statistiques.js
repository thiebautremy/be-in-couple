import { connect } from 'react-redux';
import Statistiques from '../Components/Statistiques/statistiques';
import {goBack} from '../actions/app';

const mapStateToProps = (state) => ({
  days: state.days,
  firstFirstName: state.firstFirstName,
  secondFirstName: state.secondFirstName,
});

const mapDispatchToProps = (dispatch) => ({
  handleBack: () => {
    dispatch(goBack())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Statistiques);