import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import Welcome from "./Dashboard/Welcome";
// import InvitationPage from "./Dashboard/InvitationPage";
// import Profile from "./Dashboard/Profile";
// import GenerateLink from "./Dashboard/GenerateLink";
// import NavBar from "./Dashboard/NavBar";
// import Proceed from "./Dashboard/Proceed";

const DashboardRoutes = props => {
  const { isAuth } = props;
  return isAuth ? (
    <>
      {/* <Route path="/dash" render={NavBar} /> */}
      {/* <Route path="/dash" exact render={() => <Welcome />} /> */}
      {/* <Route path="/dash/profile" render={() => <Profile />} /> */}
      {/* <Route path="/dash/proceed" render={() => <Proceed />} /> */}
      {/* <Route path="/dash/generatelink" render={() => <GenerateLink />} /> */}
      {/* <Route path="/dash/invited" render={() => <InvitationPage />} /> */}
    </>
  ) : (
    <Redirect to="/login" />
  );
};

DashboardRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps)(DashboardRoutes);
