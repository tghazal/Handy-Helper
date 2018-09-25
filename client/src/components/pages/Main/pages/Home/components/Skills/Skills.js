import React, { Component } from "react";
import "./Skills.css"

class Skills extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header text-center" >
                            Skills
                    </div>
                        <div className="card-body">
                            {this.props.skills.length ?
                                (
                                    <ul >
                                        {this.props.skills.map((skill, index) => (
                                            <li key={`skill${index}`}>
                                                <h2>{skill}</h2>
                                            </li>
                                        ))}
                                    </ul>
                                )
                                :
                                (
                                    <h3>No Skills to Display </h3>
                                )}
                            <div className="form-group">
                                <input className="form-control" value={this.props.skill} onChange={this.props.onChange} name="skill" placeholder="skill" />
                            </div>
                            <button className="btn buttoncolor lettercolor2" disabled={!(this.props.skill)} onClick={this.props.onClick}>
                                Add Skill
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;