import Card from "../Card/Card";
import styles from "./Cards.module.scss";
import { useCards } from "./use-cards";

const Cards = () => {
  const [vacancies, handleClick ] = useCards();

  return (
    <div>
      <button onClick={handleClick}>сброс поиска</button>
      <ul className={styles.container}>
        {vacancies.map((el, index) => (
          <Card key={index} el={el} />
        ))}
      </ul>
    </div>
  );
};

export default Cards;
