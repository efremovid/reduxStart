export const CHANGE_THEME = "theme/CHANGE_THEME";

export const changeTheme = (theme) => {
  return { type: CHANGE_THEME, payload: theme };
};
