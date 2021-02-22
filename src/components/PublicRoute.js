import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import usersSelect from "../redux/users/users-select";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: usersSelect.getIsAuth(state),
});

export default connect(mapStateToProps)(PublicRoute);
