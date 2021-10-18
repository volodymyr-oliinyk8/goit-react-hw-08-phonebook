const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsFetchCurrentUser = state => state.auth.isFetchCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchCurrentUser,
};

export default authSelectors;
