import React from "react";
import Tag from "../Tag/Tag";
import styles from "./Tags.module.scss"

const Tags = ({ tags }) => {
  return (
    <ul className={styles.container}>
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </ul>
  );
};

export default Tags;
