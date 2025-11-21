import styles from "./Search.module.scss";
import { useSearch } from "./use-search";

const Search = () => {
  const [searchRes, inputText, handleClick, setInputText] = useSearch();

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
