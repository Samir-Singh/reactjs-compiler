import { createContext, useState } from "react";
import ComponentOne from "../components/ComponentOne";
import { CountContextType } from "../types.ts";
import { ThemeProvider } from "./theme-context.tsx";

export const CountContext = createContext<CountContextType | null>(null);

function UseContext() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <CountContext value={{ count, handleIncrement, handleDecrement }}>
      <ThemeProvider>
        UseContext.tsx file
        <ComponentOne />
      </ThemeProvider>
    </CountContext>
  );
}

export default UseContext;
