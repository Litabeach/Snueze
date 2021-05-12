import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Journal from "./pages/Journal";
import Community from "./pages/Community";
import Login from "./pages/Login";
import MyBed from "./pages/MyBed";
import Resources from "./pages/Resources";
import Stats from "./pages/Stats";
import Survey from "./pages/Survey";
import Tools from "./pages/Tools";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="journal">
            <Journal />
          </Route>
          <Route exact path="/community">
            <Community />
          </Route>
          <Route exact path="/mybed">
            <MyBed />
          </Route>
          <Route exact path={["/", "/login"]}>
            <Login />
          </Route>
          <Route exact path="signup">
            <Signup />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          <Route exact path="/stats">
            <Stats />
          </Route>
          <Route exact path="/survey">
            <Survey />
          </Route>
          <Route exact path="/tools">
            <Tools />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;


