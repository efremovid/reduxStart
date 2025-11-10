import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Filter from "./components/Filter/Filter";

function App() {

  return (
    <>
      <Filter />
      <Cards />
    </>
  );
}

export default App;
