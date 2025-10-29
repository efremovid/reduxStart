import { ADD_FILTER, REMOVE_FILTER } from "./filters-actions";

const initialState = [];

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return [...state, action.payload]

    default:
      return state;
  }

  // if (action.type === ADD_FILTER) {
  //     return []
  // } else if (action.type === REMOVE_FILTER) {

  // }

  // else {
  //    return state
  // }
};
