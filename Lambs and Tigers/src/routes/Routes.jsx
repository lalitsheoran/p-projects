import React from "react";
import { Route, Switch } from "react-router-dom";
// import DashboardRoutes from "./DashboardRoutes";
import Login from "./Login";
import Register from "./Register";
import About from "./About";
// import Contact from "./Contact";
import Home from "./Home";
import NavBarPublic from "./NavbarPublic";
import Mode from './Mode'
import NoMatch from "./NoMatch";
import LocalGame from "./LocalGame";
import Game from "./Game";
import Welcome from "./Welcome";
import Profile from "./Profile";
import Proceed from "./Proceed";

const Routes = () => {
  return (
    <>
      <Route path="/" component={NavBarPublic} />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/welcome" render={()=><Welcome/>}/>
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={(props) => <Register {...props} />} />
        <Route path="/about" render={() => <About />} />
        {/* <Route path="/contact" render={() => <Contact />} /> */}
        <Route path="/mode" render={() => <Mode />} />
        <Route path="/game" render={() => <Game />} />
        <Route path="/localgame" render={() => <LocalGame />} />
        <Route path="/profile" render={()=><Profile/>}/>
        <Route path="/proceed" render={()=><Proceed/>}/>
        <Route component={NoMatch} />
      </Switch>
    </>
  );
};

export default Routes;