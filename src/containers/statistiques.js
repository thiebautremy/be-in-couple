import { connect } from 'react-redux';
import Statistiques from '../Components/Statistiques/statistiques';

const mapStateToProps = (state) => ({
  days: state.days,
});

// const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps)(Statistiques);