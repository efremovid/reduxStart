import React, {useState} from "react";
import styles from "./Search.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectSearch} from "../../store/Search/search-selectors";
import {searchVacancy} from "../../store/Search/search-actions";

const Search = () => {
    const [inputText, setInputText] = useState("");
    const searchRes = useSelector(selectSearch)

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(searchVacancy(inputText))
        setInputText("")
    }

    return (
        <div className={styles.container}>
            <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                type="text"
            />
            <button onClick={handleClick}>search</button>
            <p>Результат поиска:{searchRes}</p>
        </div>
    );
};

export default Search;
