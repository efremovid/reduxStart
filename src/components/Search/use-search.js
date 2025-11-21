import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch } from "../../store/Search/search-selectors";
import { searchVacancy } from "../../store/Search/search-actions";

export const useSearch = () => {
  const [inputText, setInputText] = useState("");
  const searchRes = useSelector(selectSearch);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(searchVacancy(inputText));
    setInputText("");
  };

  return [searchRes, inputText, handleClick, setInputText];
};
