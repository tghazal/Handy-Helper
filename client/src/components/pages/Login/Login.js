import React, { Component } from "react";
import "./Login.css";
import AuthService from '../../AuthService';
import API from "../../../utils/API";


class Login extends Component {

    constructor(){
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.Auth = new AuthService();
    }

    state = {
      user:"",
      email:"",
      password:""
        
    }

    componentWillMount(){
        if(this.Auth.loggedIn())
            this.props.history.replace('/home');
    }
    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    

    login =()=> {
        
        this.Auth.login(this.state.email,this.state.password)
            .then(res =>{
               this.props.history.replace('/home');
            })
            .catch(err =>{
                alert(err);
            })
      
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row mx-auto ">
                    <div className="col-md-9 mx-auto   mt-2">
                        <div className="card">
                            <div className="card-header tet-center" >
                               Login
                            </div>
                            <h5 className="card-title"></h5>
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
                                <button style={{ backgroundColor: "#732c7b" }} className="btn text-light"
                                    disabled={!(this.state.email &&  this.state.password)}
                                    onClick={this.login}
                                >
                                    Log In
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;