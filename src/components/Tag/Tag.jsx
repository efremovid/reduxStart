import React from "react";
import { useDispatch } from "react-redux";
import { addFilter } from "../../store/Filters/filters-actions";

const Tag = ({ isFiltered, tag }) => {
  const dispatch = useDispatch();

  return (
    <>
      {!isFiltered ? (
        <li onClick={() => dispatch(addFilter(tag))}>{tag}</li>
      ) : (
        <li>
          <button>Tag</button>
        </li>
      )}
    </>
  );
};

export default Tag;
