import { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // const multiply = () => {
  //   let i = 0;
  //   while (i < 1000000000) {
  //     i++;
  //   }
  //   return count * 5;
  // };

  const multiply = useMemo(() => {
    // expensive calculation
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return count * 5;
  }, [count]);

  return (
    <>
      <p>Count : {count}</p>
      <p>Count2 : {count2}</p>
      <p>Multiply Count by 5: {multiply}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>Count</button>
      <button onClick={() => setCount2((prev) => prev + 1)}>Count2</button>
    </>
  );
};

export default UseMemo;
