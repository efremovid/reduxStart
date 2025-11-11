import React from "react";
import styles from "./Search.module.scss"

const Search = () => {
  return (
    <div className={styles.container}>
      <input type="text" />
      <button>search</button>
    </div>
  );
};

export default Search;
