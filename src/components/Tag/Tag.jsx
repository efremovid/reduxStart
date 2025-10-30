import React from "react";
import { useDispatch } from "react-redux";
import { addFilter } from "../../store/Filters/filters-actions";
import styles from "./Tag.module.scss";

const Tag = ({ isFiltered, tag }) => {
  const dispatch = useDispatch();

  return (
    <>
      {!isFiltered ? (
        <li className={styles.tag} onClick={() => dispatch(addFilter(tag))}>
          {tag}
        </li>
      ) : (
        <li className={styles.tag}>
          {tag} <button>x</button>
        </li>
      )}
    </>
  );
};

export default Tag;
