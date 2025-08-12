import { useState } from "react";

const HOCCounter = (OriginalComponent) => {
  return function EnhancedComponents(props) {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount((prev) => prev + 1);
    };
    return (
      <OriginalComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };
};

export default HOCCounter;
