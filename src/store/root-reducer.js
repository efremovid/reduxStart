import { combineReducers } from "redux";
import { filtersReducer } from "./Filters/filters-reducer";
import { vacanciesReducer } from "./Vacancies/vacancies-reducer";
import { themeReducer } from "./Theme/theme-reducer";
import { searchReducer } from "./Search/search-reducer";

// подключение компонентов к глобальному стору
export const rootReducer = combineReducers({
  filters: filtersReducer,
  vacancies: vacanciesReducer,
  theme: themeReducer,
  search: searchReducer,
});
