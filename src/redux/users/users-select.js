const getIsAuth = (state) => state.users.isAuthUser;
const getEmail = (state) => state.users.user.email;

export default { getIsAuth, getEmail };
