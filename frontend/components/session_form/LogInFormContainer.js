import React from 'react';
import { connect } from 'react-redux';
import { hideModal, showModal } from '../../actions/modal_actions';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './SessionForm';
import SignUpFormContainer from '../session_form/SignUpFormContainer';

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
    clearErrors: () => dispatch(clearErrors()),
    formType,
    showSignUp: () => dispatch(showModal(<SignUpFormContainer formType={'signup'}/>))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
