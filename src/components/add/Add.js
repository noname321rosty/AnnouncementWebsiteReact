import React, { Component } from "react";
import {reports} from "../../database/database";

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: [...reports],
            text: this.props.text
        };


    }

    handleChange(e) {
     this.setState({text: e.target.text});
        console.log(this.props.text)
    }

    addReport(report) {
        if (report.length > 0) {
            this.props.addReport(report);
            this.setState({text: ''});
        }
    }

    render() {
        return (
            <div>
                {
                    // console.log(this.props.text)
                }
                {/*<input type="text" value={this.state.name } onChange={this.handleChange} />*/}
                <input type="text" value={this.state.text} onChange={this.handleChange.bind(this)} />
                <button className="btn btn-primary" onClick={() => this.addReport.bind(this, this.state.text)}>Submit</button>
           </div>
        );
    }
}




