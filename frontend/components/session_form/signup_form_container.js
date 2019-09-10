import { connect } from 'react-redux';
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { signup, clearAllErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session.errors,
        formType: 'signup',
        navLink: <Link to="/login">log in instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearAllErrors: () => dispatch(clearAllErrors())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));



