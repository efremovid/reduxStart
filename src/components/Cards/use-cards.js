import React, { useEffect } from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.scss";
import data from "../../mock/data.json";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchVacancies } from "../../store/Vacancies/vacancies-selectors";
import { addVacancies } from "../../store/Vacancies/vacancies-actions";
import { selectSearch } from "../../store/Search/search-selectors";
import { selectFilters } from "../../store/Filters/filters-selectors";

export const useCards = () => {
  // достаем данные по вакансиям из Store
  const searchResult = useSelector(selectSearch);
  const filters = useSelector(selectFilters);
  const vacancies = useSelector((state) =>
    selectSearchVacancies(state, searchResult, filters)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addVacancies(data));
  }, []);

  const handleClick = () => {
    dispatch(searchVacancy(""));
  };

  return [vacancies, handleClick];
};
