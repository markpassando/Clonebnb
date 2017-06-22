import { connect } from 'react-redux';
import { hideModal } from '../../actions/modal_actions';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './SessionForm';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch, { formType }) => {
  // const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  
  return {
    processForm: user => dispatch(processForm(user)).then(() => dispatch(hideModal())),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
