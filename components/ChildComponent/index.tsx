import { useEffect, useState } from "react";

const ChildComponent = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  useEffect(() => {
    console.log("Child One : Render");

    return () => {
      console.log("Child One : ComponentUnmounted");
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
      <div>ChildComponent</div>
    </div>
  );
};

export default ChildComponent;
