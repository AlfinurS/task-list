export const setNotificationsCount = ({ commit }, params) => {
  commit("SET_NOTIFICATIONS_COUNT", params);
}

export const reset = ({ commit }) => {
  commit("RESET");
}
