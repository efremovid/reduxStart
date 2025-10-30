import { ADD_FILTER, REMOVE_FILTER } from "./filters-actions";

const initialState = [];

// const [filters, setFilters] = useState(initialState);

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER: {
      return [...state, action.payload];
    }

    case REMOVE_FILTER: {
      return state.filter((el) => el !== action.payload);
    }

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
