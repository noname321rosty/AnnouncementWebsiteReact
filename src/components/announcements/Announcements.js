import React, {Component} from 'react';
import {reports} from "../../database/database";
import Announcement from "../announcement/Announcement";

export default  class Announcements extends Component {

    state = {
        reports: [...reports]
    }

    deleteReport(id) {
        this.setState({
            reports: this.state.reports.filter(report => report.id !== id)
        })
    }


    render() {
        return (
            <div>
                {
                    this.state.reports.map((value,index) => (<Announcement delete={this.deleteReport.bind(this, value.id)} report={value} key={index}/> ))
                }
            </div>
        );
    }
}





