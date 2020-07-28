import * as UI from "./actionType";

const defaultState = {
  rootFontSize: 66.66666666666666,
  userInfo: {},
  hasAuth: false
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UI.ROOT_FONT_SIZE:
      return { ...state, rootFontSize: action.value };
    case UI.USER_INFO:
      return { ...state, userInfo: action.value };
    case UI.HAS_AUTH:
      return { ...state, hasAuth: action.value };
    default:
      return state;
  }
};

export {
  appReducer,
  defaultState
}