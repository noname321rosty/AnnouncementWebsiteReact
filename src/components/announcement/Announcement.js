import React, {Component} from 'react';

class Announcement extends Component {
    render() {
        let {id, title, description, date} = this.props.report;
        return (
            <div>
                {id} - {title} - {description} - {date}
            </div>
        );
    }
}

export default Announcement;
