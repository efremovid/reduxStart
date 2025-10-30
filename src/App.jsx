import { useState } from "react";
import data from "../src/mock/data.json";

import "./App.css";
import Cards from "./components/Cards/Cards";
import Filter from "./components/Filter/Filter";

function App() {

  return (
    <>
      <Filter />
      <Cards data={data} />
    </>
  );
}

export default App;
