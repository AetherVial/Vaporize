import React from 'react';


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

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li class = "errors" key={`error: ${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    handleDemo(e) {
        e.persist();
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
        }, 200);
    }

    addPassword(pw, e) {
        setTimeout(() => {
            this.setState({ password: this.state.password + pw.shift() });
            if (pw.length != 0) {
                this.addPassword(pw, e);
            } else {
                this.handleSubmit(e);
            }
        }, 200);
    }

    render() {
        return (
            <div className= "session-form">
                <div id="login-logo"><img src="assets/PBIcon.png" />
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
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;