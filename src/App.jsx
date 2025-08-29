import { useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const multiply = useMemo(() => {
    console.log("calculating");
    return count * 5;
  }, [count]);

  return (
    <>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="border px-2 rounded"
      >
        Count : {count}
      </button>

      <input
        value={text}
        onChange={(e) => setText(e?.target?.value)}
        placeholder="Type something"
        className="ml-2 border rounded px-2"
      />

      <span className="ml-2">
        {count} * 5 : {multiply}
      </span>
    </>
  );
};

export default App;
