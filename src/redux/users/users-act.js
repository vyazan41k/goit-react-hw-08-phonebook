import { createAction } from "@reduxjs/toolkit";

export const addUsersRequest = createAction("users/addUsersRequest");
export const addUsersSuccess = createAction("users/addUsersSuccess");
export const addUsersError = createAction("users/addUsersError");

export const loginUsersRequest = createAction("users/loginUsersRequest");
export const loginUsersSuccess = createAction("users/loginUsersSuccess");
export const loginUsersError = createAction("users/loginUsersError");

export const logOutUsersRequest = createAction("users/logOutUsersRequest");
export const logOutUsersSuccess = createAction("users/logOutUsersSuccess");
export const logOutUsersError = createAction("users/logOutUsersError");

export const getCurrentUserRequest = createAction(
  "users/getCurrentUserRequest"
);
export const getCurrentUserSuccess = createAction(
  "users/getCurrentUserSuccess"
);
export const getCurrentUserError = createAction("users/getCurrentUserError");
