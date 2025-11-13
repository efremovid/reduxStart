import React, { useEffect } from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.scss";
import data from "../../mock/data.json";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchVacancies,
  selectVacancies,
} from "../../store/Vacancies/vacancies-selectors";
import { addVacancies } from "../../store/Vacancies/vacancies-actions";
import { selectSearch } from "../../store/Search/search-selectors";
import { searchVacancy } from "../../store/Search/search-actions";

const Cards = () => {
  // достаем данные по вакансиям из Store
  const searchResult = useSelector(selectSearch);
  const vacancies = useSelector((state) =>
    selectSearchVacancies(state, searchResult)
  );

  // const [vacancies, setVacancies] = useState([])

  // записываем данные по вакансиям в Store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addVacancies(data));
    // setVacancies(data)
  }, []);

  return (
    <div>
      <button onClick={() => dispatch(searchVacancy(""))}>сброс поиска</button>
      <ul className={styles.container}>
        {vacancies.map((el, index) => (
          <Card key={index} el={el} />
        ))}
      </ul>
    </div>
  );
};

export default Cards;
