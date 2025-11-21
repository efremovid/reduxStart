import { useThemeSwitcher } from "./use-theme-switcher";


function ThemeSwitcher() {

const [theme, handleClick] = useThemeSwitcher;
  
  return <button onClick={handleClick}>{theme}</button>;
}

export default ThemeSwitcher;
