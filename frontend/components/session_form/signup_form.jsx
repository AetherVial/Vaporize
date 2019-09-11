import React from 'react';
import {Link} from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillUnmount() {
        this.props.clearAllErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push('/browse'));
    }

    renderErrors() {
        return (
            <ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error: ${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="session-form">
                <div><img src={window.PBBig}/>
                </div>
                <br />
                <Link to="/login" className="demo-user-button">Log In Instead</Link>
                <br />
                <form onSubmit={this.handleSubmit}>
                    Welcome to Vaporize!
                <br />
                    Please sign up!
                    {this.renderErrors()}
                    <div>
                        <br />
                        
                            <input 
                                className="text-field"
                                type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                placeholder="Username"
                            />
                        
                        <br />
                        
                        <input 
                                className="text-field"
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                        />
                        
                        <br />
                        
                        <input 
                                className="text-field"
                                type="text"
                                value={this.state.first_name}
                                onChange={this.update('first_name')}
                                placeholder="First Name"
                            />
                       
                        <br />
                        
                        <input className="text-field"
                                type="text"
                                value={this.state.last_name}
                                onChange={this.update('last_name')}
                                placeholder="Last Name"
                            />
                        <br />
                        <input 
                                className="text-field"  
                                type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                            />
                        <br />
                        <br />
                        <input className="login-user-button" 
                        type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;