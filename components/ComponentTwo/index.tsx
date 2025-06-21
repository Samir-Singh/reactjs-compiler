import { useContext } from "react";
import { ThemeContext } from "../../src/UseContext";
import ComponentThree from "../ComponentThree";
const ComponentTwo = () => {
  const ThemeData = useContext(ThemeContext);

  return (
    <>
      <h2>Component Two</h2>
      <div>Theme: {ThemeData?.theme}</div>
      <button onClick={() => ThemeData?.toggleTheme()}>Toggle Theme</button>
      <ComponentThree />
    </>
  );
};

export default ComponentTwo;
