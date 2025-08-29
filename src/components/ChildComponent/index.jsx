import { memo } from "react";

const ChildComponent = () => {
  console.log("ChildComponent");
  return (
    <>
      <p>ChildComponent</p>
    </>
  );
};

export default memo(ChildComponent);
