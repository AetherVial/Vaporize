import React from 'react';
import clearAllErrors from "../../actions/session_actions";
import {Link} from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
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
            .then(() => this.props.history.push('/browse/artists'));
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className = "errors" key={`error: ${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    handleDemo(e) {
        e.persist();
        this.setState({
            username: '',
            password: ''
        })
        let user = "DemoUser".split('');
        let password = "hailsatan".split(''); 
        this.addUsername(user, password, e);
    }

    addUsername(user, pw, e) {
        setTimeout(() => {
            this.setState({username: this.state.username + user.shift()});
            if (user.length != 0) {
                this.addUsername(user, pw, e);
            } else {
                this.addPassword(pw, e);
            }
        }, 50);
    }

    addPassword(pw, e) {
        setTimeout(() => {
            this.setState({ password: this.state.password + pw.shift() });
            if (pw.length != 0) {
                this.addPassword(pw, e);
            } else {
                this.handleSubmit(e);
            }
        }, 50);
    }

    render() {
        return (
            <div className= "session-form">
                <div id="login-logo"><img src={window.PBURL} />
                    <div id="apptitle">Vaporize</div>
                </div>
                <br />
                <div onClick={this.handleDemo} className="demo-user-button">Log In as Demo User</div>
                <br />
                <form onSubmit={this.handleSubmit}>
                    To continue, please log in to Vaporize.
                    {this.renderErrors()}
                    <div>
                        <br />
                        
                        <input className="text-field" type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                        />
                        <br></br>
                        <input className="text-field"
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                            />
                        <br></br>
                        <input className="login-user-button" type="submit" value={this.props.formType} />
                        <br/>
                        <br/>
                        <Link to="/signup" id="signup-user-instead">Don't have an account? Sign Up Instead.</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;