import { createContext, useState } from "react";
import ComponentOne from "../components/ComponentOne";
import { StoreContextType } from "../types.ts";

export const StoreContext = createContext<StoreContextType | null>(null);

function UseContext() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <StoreContext.Provider value={{ count, handleIncrement, handleDecrement }}>
      UseContext.tsx file
      <ComponentOne />
    </StoreContext.Provider>
  );
}

export default UseContext;
