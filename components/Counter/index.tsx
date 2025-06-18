import { useRef, useState } from "react";

const Counter = () => {
  const ref = useRef(0);
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => (ref.current += 1)}>
        Ref Count : {ref.current}
      </button>

      <button onClick={() => setCount((prev) => prev + 1)}>
        State Count : {count}
      </button>
    </div>
  );
};

export default Counter;
