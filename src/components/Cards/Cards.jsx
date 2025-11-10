import React, { useEffect } from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.scss";
import data from "../../mock/data.json"
import { useDispatch, useSelector } from "react-redux";
import { selectVacancies } from "../../store/Vacancies/vacancies-selectors";
import { addVacancies } from "../../store/Vacancies/vacancies-actions";

const Cards = () => {
  // достаем данные по вакансиям из Store
  const vacancies = useSelector(selectVacancies);

  // const [vacancies, setVacancies] = useState([])


  // записываем данные по вакансиям в Store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addVacancies(data));
    // setVacancies(data)
  }, []);

  return (
    <ul className={styles.container}>
      {vacancies.map((el, index) => (
        <Card key={index} el={el} />
      ))}
    </ul>
  );
};

export default Cards;
