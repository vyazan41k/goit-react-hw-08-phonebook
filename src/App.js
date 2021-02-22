import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AppBar from "./components/AppBar";
import usersOperations from "./redux/users/users-ops";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import routes from "./routes";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div>
        <AppBar />
        <Suspense fallback={<p>Loading....</p>}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <PrivateRoute
              exact
              path={routes.contacts}
              component={ContactsPage}
              redirectTo="/login"
            />
            <PublicRoute
              exact
              path={routes.login}
              restricted
              component={LoginPage}
              redirectTo="/contacts"
            />
            <PublicRoute
              exact
              path={routes.register}
              restricted
              component={RegisterPage}
              redirectTo="/contacts"
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: usersOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
