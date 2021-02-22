import React from "react";
import { NavLink } from "react-router-dom";

import routes from "../../routes";

const styles = {
  NavLink: {
    marginLeft: "10px",
  },
};

function AuthNav() {
  return (
    <div>
      <NavLink style={styles.NavLink} exact to={routes.login}>
        LoginPage
      </NavLink>
      <NavLink style={styles.NavLink} exact to={routes.register}>
        RegisterPage
      </NavLink>
    </div>
  );
}

export default AuthNav;
