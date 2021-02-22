import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import usersSelect from "../../redux/users/users-select";

import routes from "../../routes";

const styles = {
  NavLink: {
    marginLeft: "10px",
  },
};

function Nav({ isAuth }) {
  return (
    <div>
      <NavLink style={styles.NavLink} exact to={routes.home}>
        Home
      </NavLink>
      {isAuth && (
        <NavLink style={styles.NavLink} exact to={routes.contacts}>
          ContactsPage
        </NavLink>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: usersSelect.getIsAuth(state),
});

export default connect(mapStateToProps)(Nav);
