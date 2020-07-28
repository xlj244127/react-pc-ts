import * as UI from "./actionType";

export const dispatchAction = (dispatch) => ({
  changeRootFont(value) {
    dispatch({ type: UI.ROOT_FONT_SIZE, value });
  },
  changeUserInfo(value) {
    dispatch({ type: UI.USER_INFO, value });
  },
  changeHasAuth(value) {
    dispatch({ type: UI.HAS_AUTH, value });
  }
});
