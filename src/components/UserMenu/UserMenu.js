import React from "react";
import { connect } from "react-redux";
import usersSelect from "../../redux/users/users-select";
import usersOperations from "../../redux/users/users-ops";

function UserMenu({ email, onLogout }) {
  return (
    <div>
      <span>{email}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  email: usersSelect.getEmail(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(usersOperations.logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
