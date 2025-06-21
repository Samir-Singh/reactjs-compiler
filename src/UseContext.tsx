import { createContext, useState } from "react";
import ComponentOne from "../components/ComponentOne";
import { CountContextType, ThemeContextType } from "../types.ts";

export const CountContext = createContext<CountContextType | null>(null);
export const ThemeContext = createContext<ThemeContextType | null>(null);

function UseContext() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <CountContext.Provider value={{ count, handleIncrement, handleDecrement }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        UseContext.tsx file
        <ComponentOne />
      </ThemeContext.Provider>
    </CountContext.Provider>
  );
}

export default UseContext;
