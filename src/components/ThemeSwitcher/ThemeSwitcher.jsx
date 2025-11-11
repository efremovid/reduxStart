import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/Theme/theme-actions";
import { selectTheme } from "../../store/Theme/theme-selectors";

function ThemeSwitcher() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const payload = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const body = document.querySelector("body");
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button onClick={() => dispatch(changeTheme(payload))}>{theme}</button>
  );
}

export default ThemeSwitcher;
