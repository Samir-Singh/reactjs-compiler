import { useContext } from "react";
import { StoreContext } from "../../src/UseContext";

const ComponentThree = () => {
  const StoreData = useContext(StoreContext);

  return (
    <div>
      ComponentThree
      <div>Count : {StoreData.count}</div>
      <button onClick={() => StoreData.handleIncrement()}>Inc</button>
      <button onClick={() => StoreData.handleDecrement()}>Dec</button>
    </div>
  );
};

export default ComponentThree;
