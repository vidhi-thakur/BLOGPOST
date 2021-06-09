import './App.css';
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js"
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Createblog from "./components/Createblog.js";
import Login from "./components/Login.js";

function App() {
    const user = "vidhi";
  return (
    <>

{
        user?(<>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/categouries/">
                        Categouries
                    </Route>
                    <Route path="/notifications/">
                        Notification
                    </Route>
                    <Route path="/account/">
                        Account
                    </Route>
                    <Route path="/create-blog/">
                        <Createblog />
                    </Route>
                </Switch>
            </Router>
        </>):(<Login />)
    }

            
        
        </>
  );
}

export default App;
