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
            this.props.history.replace('/app/home');
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



                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center text-black mb-4">Need Help?</h2>
                            <div className="row">
                                <div className="col-md-6 mx-auto">


                                    <div className="card rounded-0">
                                        <div className="card-header">
                                            <h3 className="mb-0">Login</h3>
                                        </div>
                                        <div className="card-body">
                                            <input className="form-control"
                                                value={this.state.topic}
                                                onChange={this.handleInputChange}
                                                name="email"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="card-body">
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
                                        <h6>Don't have an account?</h6>
                                        <button className="btn text-light btn-primary" onClick={this.goToRegisterPage.bind(this)}>
                                            Register Here
                                    </button>

                                    </div>

                                </div>


                            </div>


                        </div>


                    </div>

                </div>









                {/* <div className="row">
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
                </div> */}
            </div >
        );
    }
}

export default Login;