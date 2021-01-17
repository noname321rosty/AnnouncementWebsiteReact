import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from "./components/home/Home";
import Announcements from "./components/announcements/Announcements";
import Add from "./components/add/Add";
import Search from "./components/search/Search";
import Edit from "./components/edit/Edit";

function App() {
  return (
    <div>
        <Router>
            <div>
                <Link to={'/home'}>home</Link>
                <Link to={'/all'}>all</Link>
                <Link to={'/add'}>add</Link>
                <Link to={'/search'}>search</Link>
                <Link to={'/edit'}>edit</Link>
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
                    <Add/>
                </Route>
                <Route path={'/search'}>
                    <Search/>
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
