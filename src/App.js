import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from "./components/home/Home";
import Announcements from "./components/announcements/Announcements";
import Add from "./components/add/Add";
import Edit from "./components/edit/Edit";
import Search from "./components/search/Search";

function App() {
  return (
    <div>
        <Router>
            <div>
                <Link to={'/home'}>home</Link>
                <Link to={'/announcements'}>announcements</Link>
                <Link to={'/add'}>add</Link>
                <Search/>
            </div>

            <hr/>
            <Switch>
                <Route path={'/home'}>
                    <Home/>
                </Route>
                <Route path={'/announcements'}>
                    <Announcements/>
                </Route>
                <Route path={'/add'}>
                    <Add/>
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
