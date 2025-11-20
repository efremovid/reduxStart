import { ADD_VACANCIES } from "./vacancies-actions";

const initialState = [];

export const vacanciesReducer = (state = initialState, action) => {
  if (action.type === ADD_VACANCIES) {

    
    return action.payload;
    // return action.payload;
  }

  return state;
};

