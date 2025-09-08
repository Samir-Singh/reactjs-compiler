<<<<<<< HEAD
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <Counter />
=======
import { useState } from "react";
import ChildComponent from "./components/ChildComponent";
import useCustomEffect from "./hooks/useCustomEffect";

const App = () => {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("render");

  //   return () => {
  //     console.log("return");
  //   };
  // });

  useCustomEffect(() => {
    console.log("render");

    return () => {
      console.log("return");
    };
  }, [show]);

  return (
    <div>
      <h1>useEffect</h1>
      <p>Count : {count}</p>
      <button
        className="border py-1 px-5"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Inc
      </button>
      <button
        className="border py-1 px-5"
        onClick={() => setShow((prev) => !prev)}
      >
        Toggle
      </button>

      {show && <ChildComponent />}
>>>>>>> cd3655c15f450f4ef066aeb67c6e127d398532c6
    </div>
  );
};

export default App;
