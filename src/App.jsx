import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Filter from "./components/Filter/Filter";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { useSelector } from "react-redux";
import { selectTheme } from "./store/Theme/theme-selectors";
import Search from "./components/Search/Search";

function App() {
  const theme = useSelector(selectTheme);

  return (
    <>
      <ThemeSwitcher />
      <Search/>
      <Filter />
      <Cards />
    </>
  );
}

export default App;
