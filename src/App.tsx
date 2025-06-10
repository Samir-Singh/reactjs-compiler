import { useState } from "react";
import ClassCounter from "../components/ClassCounter";
import Counter from "../components/Counter";

function App() {
  const [classToggle, setClassToggle] = useState(true);
  const [functionToggle, setFunctionToggle] = useState(true);
  return (
    <div>
      App.tsx file
      {classToggle && <ClassCounter />}
      <button onClick={() => setClassToggle((prev) => !prev)}>
        Toggle Class
      </button>
      {functionToggle && <Counter />}
      <button onClick={() => setFunctionToggle((prev) => !prev)}>
        Toggle Function
      </button>
    </div>
  );
}

export default App;
