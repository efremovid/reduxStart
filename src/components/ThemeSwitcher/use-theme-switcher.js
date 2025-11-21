import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/Theme/theme-actions";
import { selectTheme } from "../../store/Theme/theme-selectors";

export const useThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const payload = theme === "light" ? "dark" : "light";

  const handleClick = () => {
    dispatch(changeTheme(payload));
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, handleClick];
};
