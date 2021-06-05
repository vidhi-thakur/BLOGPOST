import './App.css';
import Navbar from "./components/Navbar.js";
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        Home
                    </Route>
                    <Route path="/categouries">
                        Categouries
                    </Route>
                    <Route path="/notifications">
                        Notification
                    </Route>
                    <Route path="/account">
                        Account
                    </Route>
                </Switch>
            </Router>
        
        </>
  );
}

export default App;
