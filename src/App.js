import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from "./components/home/Home";
import Announcements from "./components/announcements/Announcements";
import AddAnnouncements from "./components/addAnnouncements/AddAnnouncements";
import SearchAnnouncements from "./components/searchAnnouncements/searchAnnouncements";
import DeleteAnnouncement from "./components/deleteAnnouncement/deleteAnnouncement";

function App() {
  return (
    <div>
        <Router>
            <div>
                <Link to={'/home'}>home</Link>
                <Link to={'/all'}>all</Link>
                <Link to={'/add'}>add</Link>
                <Link to={'/search'}>search</Link>
                <Link to={'/remove'}>remove</Link>
            </div>

            <hr/>
            <Switch>
                <Route path={'/home'}>
                    <Home/>
                </Route>
                <Route path={'/all'}>
                    <Announcements/>
                </Route>
                <Route path={'/add'}>
                    <AddAnnouncements/>
                </Route>
                <Route path={'/search'}>
                    <SearchAnnouncements/>
                </Route>
                <Route path={'/remove'}>
                    <DeleteAnnouncement/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
