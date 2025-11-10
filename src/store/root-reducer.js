import { combineReducers } from "redux";
import { filtersReducer } from "./Filters/filters-reducer";
import { vacanciesReducer } from "./Vacancies/vacancies-reducer";

// подключение компонентов к глобальному стору
export const rootReducer = combineReducers({
  filters: filtersReducer,
  vacancies: vacanciesReducer,
});
