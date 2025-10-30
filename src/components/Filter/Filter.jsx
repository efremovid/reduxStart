import React from "react";
import { useSelector } from "react-redux";
import { selectFilters } from "../../store/Filters/filters-selectors";
import Tags from "../Tags/Tags";

const Filter = () => {
  const filter = useSelector(selectFilters);

  return (
    <div>
      <Tags tags={filter} isFiltered={true}/>
    </div>
  );
};

export default Filter;
