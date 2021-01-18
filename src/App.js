import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Task from "./components/task/Task";
import Announcements from "./components/announcements/Announcements";
import Add from "./components/add/Add";
import Edit from "./components/edit/Edit";
import Search from "./components/search/Search";

function App() {
  return (
    <div>
        <Router>
            <div className={'wrap'}>
                <Link to={'/task'}>task</Link>
                <Link to={'/announcements'}>announcements</Link>
                <hr/>
                <Add/>
                <hr/>
                <Search/>
            </div>

            <hr/>
            <Switch>
                <Route path={'/task'}>
                    <Task/>
                </Route>
                <Route path={'/announcements'}>
                    <Announcements/>
                </Route>
                <Route path={'/edit'}>
                    <Edit/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
