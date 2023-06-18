import { TMP_STATE } from './constants'
export default {

  SET_NOTIFICATIONS_COUNT(state, notificationsCount) {
    state.notificationsCount = notificationsCount;
  },

  RESET(state) {
    const defaultState = Object.entries(TMP_STATE);
    defaultState.forEach((item) => {
      const key = item[0];
      const value = item[1];
      state[key] = value;
    });
  },
};
