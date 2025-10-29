import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.scss"

const Cards = ({ data }) => {
  return (
    <ul className={styles.container}>
      {data.map((el) => (
        <Card el={el} />
      ))}
    </ul>
  );
};

export default Cards;
