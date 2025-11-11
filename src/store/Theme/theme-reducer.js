import { CHANGE_THEME } from "./theme-actions";

const initialState = "light";

export const themeReducer = (state = initialState, action) => {
  if (action.type === CHANGE_THEME) {
    // if (action.payload === "light") {
    //   return "dark";
    // } else {
    //   return "light";
    // }
    return action.payload;
  }
  return state;
};
