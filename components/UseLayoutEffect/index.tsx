import { useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  useLayoutEffect(() => {
    console.log("useLayoutEffect rendered");
  }, []);

  useEffect(() => {
    console.log("useEffect rendered");
    let a = 0;
    for (let i = 0; i < 1000000000; i++) {
      a++;
    }
  }, []);

  console.log("Home Rendered");
  return <div>UseLayoutEffect</div>;
};

export default UseLayoutEffect;
