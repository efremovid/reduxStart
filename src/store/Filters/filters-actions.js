export const ADD_FILTER = "filters/ADD_FILTER";
export const REMOVE_FILTER = "filters/REMOVE_FILTER";

export const addFilter = (filter) => ({
  type: ADD_FILTER,
  payload: filter,
});

export const removeFilter = (filter) => ({
  type: REMOVE_FILTER,
  payload: filter
});

