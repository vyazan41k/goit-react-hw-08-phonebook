import React from "react";
import { connect } from "react-redux";
import Nav from "../Nav";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";
import usersSelect from "../../redux/users/users-select";

const styles = {
  div: {
    display: "flex",
    justifyContent: "space-between",
  },
};

function AppBar({ isAuth }) {
  return (
    <div style={styles.div}>
      <Nav />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: usersSelect.getIsAuth(state),
});

export default connect(mapStateToProps)(AppBar);
