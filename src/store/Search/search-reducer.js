import { SEARCH_VACANCY } from "./search-actions";

const initialState = "";

export const searchReducer = (state = initialState, action) => {
  if (action.type === SEARCH_VACANCY) {
    return action.payload;
  }
  return state;
};
