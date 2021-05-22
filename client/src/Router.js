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
                <Switch>
                    {loggedIn === false &&
                        <Route exact path="/">
                        <Header />
                        <Login />
                        </Route>
                    }
                    {loggedIn === false &&
                        <Route exact path="/register">
                        <Header />
                        <Register />
                        </Route>
                    }
                    {loggedIn === true &&
                        <Route exact path="/">
                            <Header />
                            <MyBed />
                        </Route>
                    }
                    {loggedIn === true &&
                        <Route exact path="/mybed">
                            <Header />
                            <MyBed />
                        </Route>
                    }
                    {loggedIn === true &&
                        <Route exact path="/survey">
                            <Header />
                            <Survey />
                        </Route>
                    }
                    {loggedIn === true &&
                        <Route exact path="/journal">
                        <Header />
                        <Journal />
                        </Route>
                    }
                    {loggedIn === true &&
                        <Route exact path="/stats">
                            <Header />
                            <Stats />
                        </Route>
                    }
                    {loggedIn === true &&
                        <Route exact path="/tools">
                            <Header />
                            <Tools />
                        </Route>
                    }
                    {loggedIn === true &&
                        <Route exact path="/community">
                            <Header />
                            <Community />
                        </Route>
                    }
                    {loggedIn === true &&
                        <Route exact path="/resources">
                            <Header />
                            <Resources />
                        </Route>
                    }
                    {loggedIn === true &&
                        <Route>
                            <Header />
                            <NoMatch />
                        </Route>
                    }
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default ReactRouter;
