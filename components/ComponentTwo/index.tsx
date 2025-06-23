import ComponentThree from "../ComponentThree";
import { useTheme } from "../../src/theme-context";
const ComponentTwo = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <h2>Component Two</h2>
      <div>Theme: {theme}</div>
      <button onClick={() => toggleTheme()}>Toggle Theme</button>
      <ComponentThree />
    </>
  );
};

export default ComponentTwo;
