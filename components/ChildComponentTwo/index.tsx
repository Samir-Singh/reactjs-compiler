import { useState } from "react";
import useCustomEffect from "../../hooks/use-custom-effect";

const ChildComponentTwo = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  useCustomEffect(() => {
    console.log("Child Two : Render");

    return () => {
      console.log("Child Two : ComponentUnmounted");
    };
  });

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <button onClick={() => setCount((prev) => prev + 1)}>
        CountOne : {count}
      </button>
      <button onClick={() => setCount2((prev) => prev - 1)}>
        CountTwo : {count2}
      </button>
      <div>ChildComponentTwo</div>
    </div>
  );
};

export default ChildComponentTwo;
