import React, { useState } from "react";
import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch } from "../../store/Search/search-selectors";
import { searchVacancy } from "../../store/Search/search-actions";

const Search = () => {
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
      />
      <button onClick={() => dispatch(searchVacancy(inputText))}>search</button>
    </div>
  );
};

export default Search;
