import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearAllErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session.errors,
        formType: 'login',
        navLink: <Link to="/signup">signup instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearAllErrors: () => dispatch(clearAllErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);