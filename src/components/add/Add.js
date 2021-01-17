import React, {Component} from 'react';
import {reports} from "../../database/database";


class Add extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.report,
            description: this.props.report,
            reports
        }


    }

    add = () => {
        const {title, description} = this.state;
            const args = {title, description};

            console.log(this.state.reports.id);

            if (args !== this.state.reports){
                reports.push(title, description)
            }
    }

    onChangeTitle = (event) => {
      this.setState(event.target.value);
    };

    onChangeDesc = (event) => {
      this.setState(event.target.value);
    };

    render() {


        return (

                <form onSubmit={this.add}>
                    <label>New Announcements</label><br/>
                    <input type="text" placeholder='title' value={this.state.title} onChange={this.onChangeTitle}/><br/>
                    <input type="text" placeholder='description' value={this.state.description} onChange={this.onChangeDesc} />
                    <button type="submit">Create</button>
                </form>
        );
    }
}

export default Add;



// save = () => {
//     const {name, email} = this.state;
//     const user = {name, email}
//
//     localStorage.setItem(localStorage.length + '', JSON.stringify(user))
// }
//
// get = () => {
//     const users = [];
//
//     for(const key in localStorage) {
//         if(typeof +key === 'number') {
//             const fullUser = JSON.parse(localStorage[key]);
//             console.log(fullUser);
//             users.push({name: fullUser.name, email: fullUser.email})
//         }
//     }
//
//     console.log(users);
//     this.setState({users})
// }
//
// onChangeName = (e) => {
//     this.setState({name: e.target.value})
// }
//
// onChangeEmail = (e) => {
//     this.setState({email: e.target.value})
// }
//
//
// render() {
//     const {name, email} = this.state;
//     return (
//         <div>
//
//             <form onSubmit={this.save} >
//                 <input type="text" placeholder="name" value={name} onChange={this.onChangeName}/>
//                 <input type="text" placeholder="email" value={email} onChange={this.onChangeEmail}/>
//
//                 <button type="submit">Create</button>
//
//             </form>
//             <button onClick={this.get} >get</button>
//             <div>
//                 { this.state.users.length && this.state.users.map(user => <p> {user[user.name]} - {user.email}</p> )
//                 }
//             </div>
//         </div>
//     );
// }
