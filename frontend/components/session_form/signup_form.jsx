import React from 'react';

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
            <div >
                <form onSubmit={this.handleSubmit}>
                    Welcome to Vaporize!
          <br />
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <div>
                        <br />
                        <label>Username:
              <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}

                            />
                        </label>
                        <br />
                        <label>Password:
              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}

                            />
                        </label>
                        <br />
                        <label>First Name:
              <input type="text"
                                value={this.state.first_name}
                                onChange={this.update('first_name')}

                            />
                        </label>
                        <br />
                        <label>Last Name:
              <input type="text"
                                value={this.state.last_name}
                                onChange={this.update('lastname')}

                            />
                        </label>
                        <br />
                        <label>Password:
              <input type="email"
                                value={this.state.email}
                                onChange={this.update('email')}

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

export default SignupForm;