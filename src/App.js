import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect, NavLink} from 'react-router-dom';
import Task from "./components/task/Task";
import Announcements from "./components/announcements/Announcements";
import Edit from "./components/edit/Edit";
import Announcement from "./components/announcement/Announcement";

function App() {
  return (
    <div>
        <Router>
            <div className={'wrap'}>
                <NavLink to={'/task'}>task</NavLink>
                <NavLink to={'/announcements'}>announcements</NavLink>
            </div>

            <hr/>
            <Switch>
                <Route path={'/announcements/:id'} component={Announcement}/>
                <Route path={'/announcements'} component={Announcements}/>
                <Route path={'/task'} component={Task}/>
                {/*<Route path={'/edit'} component={Edit}/>*/}
                <Redirect from='/' to='/task'/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
