import React, {Component} from 'react';
import {reports} from "../../database/database";


class Add extends Component {
    state = {
        reports: [...reports]
    }

    add = () => {
       const newItem ='smt';
       this.setState({reports: this.state.concat(newItem)})

    }

    render() {


        return (

                <form onSubmit={this.add}>
                    <label>New Announcements</label><br/>
                    {/*<input type="text" placeholder='title' value={this.state}/><br/>*/}
                    {/*<input type="text" placeholder='description' value={this.state}/>*/}
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
