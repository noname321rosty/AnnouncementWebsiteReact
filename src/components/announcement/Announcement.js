import React, {Component} from 'react';
import Edit from "../edit/Edit";
import {reports} from "../../database/database";

export default class Announcement extends Component {

    constructor(props) {
        super(props);

        this.state = {
            reports: [...reports]
        }
    }

    // componentDidMount() {
    //     const {id} = this.props.id;
    // }

    render() {
       let {id , title , description , date} = this.props.report;
        return (
            <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{date}</p>
                    <Edit/>
            </div>
        );
    }
}



// export default function Announcement(props) {
//     let {id, title, description, date} = props.report;
//
//     return (
//         <div>
//             {
//                 <div>
//                     <h2>{title}</h2>
//                     <p>{description}</p>
//                     <p>{date}</p>
//                     <button onClick={props.delete}>remove</button>
//                     <Edit/>
//                 </div>
//             }
//         </div>
//     );
// }



