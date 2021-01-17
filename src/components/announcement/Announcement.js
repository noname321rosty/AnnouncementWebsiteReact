import React, {Component} from 'react';

class Announcement extends Component {
    render() {
        let {id, title, description, date} = this.props.report;
        let props = this.props;
        return (
            <div>
                {
                   <div key={id}> {id} - {title} - {description} - {date}
                       <button onClick={props.delete}>remove</button>
                   </div>

                }
            </div>
        );
    }
}

export default Announcement;




