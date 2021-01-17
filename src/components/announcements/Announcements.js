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
                    this.state.reports.map(report => (<Announcement delete={this.deleteReport.bind(this, report.id)} report={report} key={report.id}/>))
                }
            </div>
        );
    }
}





