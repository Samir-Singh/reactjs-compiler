import { createContext, useState } from "react";
import ComponentOne from "../components/ComponentOne";

export const StoreContext = createContext({});

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
