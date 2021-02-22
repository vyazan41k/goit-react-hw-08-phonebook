import axios from "axios";
import {
  addUsersRequest,
  addUsersSuccess,
  addUsersError,
  loginUsersRequest,
  loginUsersSuccess,
  loginUsersError,
  logOutUsersRequest,
  logOutUsersSuccess,
  logOutUsersError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./users-act";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.Authorization = "";
  },
};

const addUsers = (user) => async (dispatch) => {
  dispatch(addUsersRequest());

  try {
    const res = await axios.post("/users/signup", user);
    token.set(res.data.token);
    dispatch(addUsersSuccess(res.data));
  } catch (error) {
    dispatch(addUsersError(error.message));
  }
};

const logInUsers = (user) => async (dispatch) => {
  dispatch(loginUsersRequest());

  try {
    const res = await axios.post("/users/login", user);
    token.set(res.data.token);
    dispatch(loginUsersSuccess(res.data));
  } catch (error) {
    dispatch(loginUsersError(error.message));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(logOutUsersRequest());

  try {
    await axios.post("/users/logout");
    token.unset();
    dispatch(logOutUsersSuccess());
  } catch (error) {
    dispatch(logOutUsersError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    users: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  try {
    const res = await axios.get("/users/current");
    dispatch(getCurrentUserSuccess(res.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

export default { addUsers, logInUsers, token, logOut, getCurrentUser };
