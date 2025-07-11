import { useState } from "react";
import ChildComponent from "../components/ChildComponent";
import ChildComponentTwo from "../components/ChildComponentTwo";

const App = () => {
  const [showChild, setShowChild] = useState(true);
  const [showChild2, setShowChild2] = useState(true);

  return (
    <div>
      <h1>
        App.jsx{" "}
        <button onClick={() => setShowChild((prev) => !prev)}>
          Toggle Child One
        </button>
        <button onClick={() => setShowChild2((prev) => !prev)}>
          Toggle Child Two
        </button>
      </h1>
      {showChild && <ChildComponent />}
      {showChild2 && <ChildComponentTwo />}
    </div>
  );
};

export default App;
