import React, { Component } from "react";
import "./Login.css";
import AuthService from '../../AuthService';

class Login extends Component {

    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.Auth = new AuthService();
    }

    state = {
        user: "",
        email: "",
        password: ""

    }

    componentWillMount() {
        if (this.Auth.loggedIn())
            this.props.history.replace('/home');
    }
    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    login = () => {
        this.Auth.login(this.state.email, this.state.password)
            .then(res => {
                this.props.history.replace('/home');
            })
            .catch(err => {
                alert(err);
            })
    }

    goToRegisterPage() {
        window.location.href = window.location.origin + '/register'
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 mt-3">
                        <div className="card">
                            <div className="card-header text-center" >
                                Login
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input className="form-control"
                                        value={this.state.topic}
                                        onChange={this.handleInputChange}
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="form-group">
                                    <input className="form-control"
                                        value={this.state.topic}
                                        onChange={this.handleInputChange}
                                        name="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <button className="btn text-light btn-primary"
                                    disabled={!(this.state.email && this.state.password)}
                                    onClick={this.login}
                                >
                                    Log In
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-3">
                        <div className="card h-100">
                            <div className="card-header text-center" >
                                Register
                            </div>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>Register here.</div>
                                <div>
                                    <button className="btn text-light btn-primary" onClick={this.goToRegisterPage.bind(this)}>
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Login;