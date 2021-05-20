import { connect } from 'react-redux';
import Display from '../Components/Display/display';

const mapStateToProps = (state) => ({
  isValide: state.isValide,
});

// const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps)(Display);