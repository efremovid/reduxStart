import React from "react";
import Tags from "../Tags/Tags";
import styles from "./Card.module.scss";
import Label from "../Label/Label";

const Card = ({ el }) => {


  return (
    <li className={styles.container}>
      <img src={el.logo} alt=""  className={styles.avatar}/>
      <div className={styles.main}>
        <div className={styles.top}>
          <h4>{el.company}</h4>
          {el.new && <Label text={"new"} color={"dark"} />}
          {el.featured && <Label text={"featured"} color={"light"} />}
        </div>
        <div className={styles.center}>
          <div className={styles.bottom}>
            <h3>{el.position}</h3>
            <ul className={styles.info}>
              <li>{el.postedAt}</li>
              <li>{el.contract}</li>
              <li>{el.location}</li>
            </ul>
          </div>
          <Tags tags={[el.role, el.level, ...el.languages, ...el.tools]} isFiltered={false}/>
        </div>
      </div>
    </li>
  );
};

export default Card;
