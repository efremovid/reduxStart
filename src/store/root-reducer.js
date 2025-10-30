import { combineReducers } from "redux";
import { filtersReducer } from "./Filters/filters-reducer";


// подключение компонентов к глобальному стору
export const rootReducer = combineReducers({
    filters: filtersReducer,
})