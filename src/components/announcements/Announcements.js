import React, {Component} from 'react';
import {reports} from "../../database/database";
// import Announcement from "../announcement/Announcement";
import Add from "../add/Add";
import Search from "../search/Search";

export default  class Announcements extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reports: [...reports],
            text: '',
            title: '',
            description: '',

        };
    }

    // editReport(id) {
    //
    // }

    addReport(title , description) {
        let array = this.state.report.slice();

        let newId = this.props.reports.length + 1;

        array.push({
            id: newId,
            title: title,
            description: description,
            date: new Date().toLocaleString()
        })

        console.log(this.state.reports);
        console.log(array);
        this.setState({
            reports: array
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
                {
                    console.log(this.state.reports)
                }


                <Add/>
                <hr/>
                <Search/>
                <hr/>
                {

                    this.state.reports.map((report,index) => (

                        <div  key={index}>
                            {/*<p>{report.id}</p>*/}
                            <h2>{report.title}</h2>
                            <p>{report.description}</p>
                            <p>{report.date}</p>
                            <button onClick={this.deleteReport.bind(this, report.id)}>remove</button>
                            {/*<button onClick={}>show more</button>*/}
                        </div>

                    ))
                }
            </div>
        );
    }
}

// constructor(props) {
//     super(props);
//     this.state = {value: this.props.todoText};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.addTodo = this.addTodo.bind(this);
// }
//
// handleChange(e) {
//     this.setState({value: e.target.value});
// }
//
// addTodo(todo , name) {
//
//     if (todo.length > 0) {
//         this.props.addTodo(todo);
//         this.setState({value: ''});
//     }
// }
//
// render() {
//     return (
//         <div>
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//             <input type="text" value={this.state.name } onChange={this.handleChange} />
//             <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Submit</button>
//         </div>
//     );
// }

