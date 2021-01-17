import React from 'react';
import {Link} from "react-router-dom";

export default function Announcement(props) {
    return (
        <div>
            {
                <div> {props.report.id} - {props.report.title} - {props.report.description} - {props.report.date}
                    <button onClick={props.delete}>remove</button>
                    <Link  to={`/edit`}>edit</Link>
                </div>
            }
        </div>
    );
}





