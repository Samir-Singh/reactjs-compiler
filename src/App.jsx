import { useCallback, useState } from "react";
import ChildComponent from "./components/ChildComponent";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <p>Parent Component</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="border mt-1 px-2 rounded"
      >
        Count : {count}
      </button>

      <ChildComponent handleIncrement={handleIncrement} />
    </>
  );
};

export default App;
