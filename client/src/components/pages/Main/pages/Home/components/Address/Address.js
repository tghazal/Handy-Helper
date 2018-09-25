import React, { Component } from "react";
import "./Address.css"

class Address extends Component {
    render() {
        return (
            <div className="row">
                <div className="col p-0">
                    <div className="card">
                        <div className="card-header text-center" >
                            Address
                    </div>
                        <div className="card-body">
                            <div className="form-group">
                                <input className="form-control"
                                    name={"address1"}
                                    value={this.props.address1}
                                    placeholder={"address1"}
                                    onChange={this.props.onChange}
                                />
                                <input className="form-control"
                                    name={"address2"}
                                    value={this.props.address2}
                                    placeholder={"address2"}
                                    onChange={this.props.onChange}
                                />
                                <input className="form-control"
                                    name={"city"}
                                    value={this.props.city}
                                    placeholder={"city"}
                                    onChange={this.props.onChange}
                                />
                                <input className="form-control"
                                    name={"state"}
                                    value={this.props.state}
                                    placeholder={"state"}
                                    onChange={this.props.onChange}
                                />
                                <input className="form-control"
                                    name={"zip"}
                                    value={this.props.zip}
                                    placeholder={"zip"}
                                    onChange={this.props.onChange}
                                />

                                <button className="btn buttoncolor lettercolor2 mt-3"
                                    disabled={!(this.props.address1 && this.props.city && this.props.state && this.props.zip)}
                                    onClick={this.props.onClick}
                                >
                                    Edit Address
                      </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        )
    }

}



export default Address;