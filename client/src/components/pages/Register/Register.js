import React, { Component } from "react";
import "./Register.css";
import API from "../../../utils/API";


class Register extends Component {
    state = {
        name: "",
        email: "",
        password: ""

    }
    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    register = () => {
        let user = { name: this.state.name, email: this.state.email, password: this.state.password }
        API.registerUser(user)
            .then(res => this.props.history.replace('/login'))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row mx-auto ">
                    <div className="col-md-9 mx-auto   mt-2">
                        <div className="card">
                            <div className="card-header tet-center" >
                                Register
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
                                        name="name"
                                        placeholder="Name"
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
                                <button style={{ backgroundColor: "#732c7b" }} className="btn text-light"
                                    disabled={!(this.state.email && this.state.name && this.state.password)}
                                    onClick={this.register}
                                >
                                    Register
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;