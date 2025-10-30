import React from "react";
import Tag from "../Tag/Tag";
import styles from "./Tags.module.scss";

const Tags = ({ tags, isFiltered }) => {
  return (
    <>
      {!isFiltered ? (
        <ul className={styles.container}>
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} isFiltered={false}/>
          ))}
        </ul>
      ) : (
        <ul className={styles.container}>
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} isFiltered={true}/>
          ))}
        </ul>
      )}
    </>
  );
};

export default Tags;
