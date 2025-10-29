import { combineReducers } from "redux";
import { filtersReducer } from "./Filters/filters-reducer";

export const rootReducer = combineReducers({
    filters: filtersReducer,
})