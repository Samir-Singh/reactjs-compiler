import { useContext } from "react";
import { CountContext } from "../../src/UseContext";

const ComponentThree = () => {
  const CountData = useContext(CountContext);

  return (
    <>
      <h3>Component Three</h3>
      <div>Count : {CountData?.count}</div>
      <button onClick={() => CountData?.handleIncrement()}>Inc</button>
      <button onClick={() => CountData?.handleDecrement()}>Dec</button>
    </>
  );
};

export default ComponentThree;
