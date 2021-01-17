import React from 'react';
import {Link} from "react-router-dom";
import {reports} from "../../database/database";

export default function Announcement(props) {
    let {id, title, description, date} = props.report;
    return (
        <div>
            {
                <div>
                    {id} - {title} - {description} - {date}
                    <button onClick={props.delete}>remove</button>
                    {/*<Link  to={`/edit`}>edit</Link>*/}
                </div>
            }
        </div>
    );
}





