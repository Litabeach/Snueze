import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Header from "./components/Header";
import MyBed from "./pages/MyBed";
import Survey from "./pages/Survey";
import Journal from "./pages/Journal";
import Stats from "./pages/Stats";
import Tools from "./pages/Tools";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import NoMatch from "./pages/NoMatch";
import Footer from './components/Footer/Footer';
import AuthContext from "./context/AuthContext"
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function ReactRouter() {
    const { loggedIn } = useContext(AuthContext);


    return (
        <Router>
            <div className="wrapper">
                <Header />
                <Switch>
                    {loggedIn === false &&
                        <Route exact path="/">
                            <Login />
                        </Route>
                    }
                    {loggedIn === false &&
                        <Route exact path="/register">
                            <Register />
                        </Route>
                    }
                    {loggedIn === true &&
                        <Route exact path="/">
                            <MyBed />
                        </Route>
                    }
                    {loggedIn === true &&
                        <Route exact path="/mybed">
                            <MyBed />
                        </Route>
                    }
                    {loggedIn === true &&
                        <Route exact path="/survey">
                            <Survey />
                        </Route>
                    }
                    {loggedIn === true &&
                        <Route exact path="/journal">
                            <Journal />
                        </Route>
                    }
                    {loggedIn === true &&
                        <Route exact path="/stats">
                            <Stats />
                        </Route>
                    }
                    {loggedIn === true &&
                        <Route exact path="/tools">
                            <Tools />
                        </Route>
                    }
                    {loggedIn === true &&
                        <Route exact path="/community">
                            <Community />
                        </Route>
                    }
                    {loggedIn === true &&
                        <Route exact path="/resources">
                            <Resources />
                        </Route>
                    }
                    <Route>
                        <NoMatch />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default ReactRouter;
