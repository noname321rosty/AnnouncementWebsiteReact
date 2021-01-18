import React, {Component} from 'react';
import {reports} from "../../database/database";
import Announcement from "../announcement/Announcement";
import Add from "../add/Add";
import Search from "../search/Search";

export default  class Announcements extends Component {

    state = {
        reports: [...reports],
        text: ''
    }
    editReport(id) {
        let text = this.state.text
        this.setState({
            reports: this.state.reports.filter(report => report.id !== id )
        });
    }

    deleteReport(id) {
        this.setState({
            reports: this.state.reports.filter(report => report.id !== id)
        })
    }

    render() {
        return (
            <div>
                <Add/>
                <hr/>
                <Search/>
                {
                    this.state.reports.map((report,index) => (<Announcement edir={this.editReport.bind(this,report.id)} delete={this.deleteReport.bind(this, report.id)} report={report} key={index}/> ))
                }
            </div>
        );
    }
}





