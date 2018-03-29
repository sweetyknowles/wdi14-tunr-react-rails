import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
//import Artist from "./components/Artist";
import ArtistList from "./components/ArtistList";
import SingleArtistView from "./components/SingleArtistView";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <div>
                        <h1>Tunr</h1>
                        <div>
                            <div><Link to="/">All Artists</Link></div>
                        </div>
                    </div>
                    <Route exact path="/" component={NavBar}/>
                    <Route exact path="/" component={ArtistList}/>
                    <Route path="/artist/:id" component={SingleArtistView}/>

                </div>
            </Router>
        );
    }
}

export default App;