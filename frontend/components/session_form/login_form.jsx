import React from 'react';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
            .then(this.props.history.push('/'));
    }

    renderErrors() {
        return (
            <ul>
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
            <div className= "session-form">
                <div id="login-logo"><img src="assets/PBIcon.png" />
                    <div id="apptitle">Vaporize</div>
                </div>
                <br />
                <a href="#" className="demo-user-button">Log in as Demo User</a>
                <br />
                <form onSubmit={this.handleSubmit}>
                <br />
                    <br/>
                    To continue, please log in to Vaporize.
                    
                    <div>
                        <br />
                        <label>
              <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                placeholder="Email or username"
                            />
                        </label>
                        <br />
                        <label>
              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                            />
                        </label>
                        <br />
                        <input type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;