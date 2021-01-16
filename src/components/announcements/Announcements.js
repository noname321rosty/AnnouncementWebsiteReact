import React, {Component} from 'react';
import {reports} from "../../database/database";
import Announcement from "../announcement/Announcement";

export default  class Announcements extends Component {

    state = {
        reports
    }

    render() {
        return (
            <div>
                {
                    this.state.reports.map(report => (<Announcement report={report} key={report.id}/>))
                }
            </div>
        );
    }
}


