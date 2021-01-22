import React, {Component} from 'react';
import Edit from "../edit/Edit";
import {reports} from "../../database/database";

export default class Announcement extends Component {

    constructor(props) {
        super(props);

        this.state = {
            report: null,
            reports:[...reports],
            title:'',
            description:'',
            date:''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch('/announcements/' + id)
            // .then(res => res.json())
            .then(report => this.setState({report}))
        this.state.reports.map(report => {
           if (report.id === +id) {
               const title = report.title;
               const description = report.description
               const date = report.date
               this.setState({title, description, date})
           }
            return report;
        })
    };

    render() {
        const {title ,description, date} = this.state;
        return (
            <div>
                {
                    (
                        <div>
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <p>{date}</p>
                            <button onClick={() => {this.props.history.push('/announcements')}}>back</button>
                        </div>
                    )
                }
            </div>
        );
    }
}








