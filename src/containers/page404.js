import { connect } from 'react-redux';
import Page404 from '../Components/Page404/page404';
import {goBack} from '../actions/app';

// const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleBack: () => {
    dispatch(goBack())
  }
});

export default connect(mapDispatchToProps)(Page404);