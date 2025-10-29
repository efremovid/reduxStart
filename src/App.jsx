import { useState } from "react";
import data from "../src/mock/data.json";

import "./App.css";
import Cards from "./components/Cards/Cards";
import { useSelector } from "react-redux";
import { selectFilters } from "./store/Filters/filters-selectors";

function App() {
  const filters = useSelector(selectFilters)

  console.log(filters)

  return (
    <>
      <Cards data={data} />
    </>
  );
}

export default App;
