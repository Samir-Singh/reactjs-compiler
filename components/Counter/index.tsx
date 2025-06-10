import { useState, useEffect, useRef } from "react";

const Counter = () => {
  console.log("Run : Function Render");

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const isFirstRender = useRef(true);
  const isUnmounted = useRef(false);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      console.log("Run : Function componentDidMount");
      return;
    }

    console.log("Run : Function componentDidUpdate");
    console.log("Run : Function Count changed");

    return () => {
      if (!isUnmounted.current) {
        isUnmounted.current = true;
        console.log("Run : Function componentWillUnmount");
      }
    };
  }, [count, count2]);

  // useEffect(() => {
  //   if (!isUseEffectRun.current) {
  //     isFirstRender.current = false;
  //     console.log("Run : Function componentDidMount");
  //     return;
  //   } else {
  //     console.log("Run : Function componentDidUpdate");
  //   }

  //   return () => {
  //     if (!isUnmounted.current) {
  //       isUnmounted.current = true;
  //       console.log("Run : Function componentWillUnmount");
  //     }
  //   };
  // }, [count2]);

  return (
    <>
      <h1>Function Counter</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count: {count}
      </button>
      <button onClick={() => setCount2((prev) => prev + 1)}>
        Count2 : {count2}
      </button>
    </>
  );
};

export default Counter;
