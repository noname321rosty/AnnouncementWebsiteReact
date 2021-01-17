import React, {Component} from 'react';
import {reports} from "../../database/database";
import Announcement from "../announcement/Announcement";

export default  class Search extends Component {
    state = {
        reports: [...reports],
        title: '',
        array: []
    }

    checkTitle = (e) => {
        e.preventDefault();

        this.setState({
            title: e.target.value
        });

        const filteredArray = this.state.reports.filter(value => value.title.includes(this.state.title));

        if(filteredArray.length) {
            this.setState({
                array: filteredArray
            })
        } else {
            this.setState({
                array: []
            })
        }
    };



    render() {
        return (
            <div>

                <input value={this.state.title} onChange={this.checkTitle} type="text" placeholder={'search by title'}/>
                <div>
                    {
                        this.state.array.map(report => <Announcement report={report}/>)
                    }
                </div>
            </div>
        );
    }
}

