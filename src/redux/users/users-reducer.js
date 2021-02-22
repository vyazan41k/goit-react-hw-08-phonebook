import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addUsersSuccess,
  addUsersError,
  loginUsersSuccess,
  loginUsersError,
  logOutUsersSuccess,
  logOutUsersError,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./users-act";

const initialUser = { name: null, email: null };

const user = createReducer(initialUser, {
  [addUsersSuccess]: (_, { payload }) => payload.user,
  [loginUsersSuccess]: (_, { payload }) => payload.user,
  [logOutUsersSuccess]: () => initialUser,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [addUsersSuccess]: (_, { payload }) => payload.token,
  [loginUsersSuccess]: (_, { payload }) => payload.token,
  [logOutUsersSuccess]: () => null,
});

const setError = (_, { payload }) => payload;
const error = createReducer(null, {
  [addUsersError]: setError,
  [loginUsersError]: setError,
  [logOutUsersError]: setError,
  [getCurrentUserError]: setError,
});

const isAuthUser = createReducer(null, {
  [addUsersSuccess]: () => true,
  [loginUsersSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [addUsersError]: () => false,
  [loginUsersError]: () => false,
  [getCurrentUserError]: () => false,
  [logOutUsersSuccess]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthUser,
});
