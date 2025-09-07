import { useRef } from "react";

const useCustomEffect = (cb, dep) => {
  const isRender = useRef(false);
  const prevDep = useRef(dep);

  if (!isRender.current) {
    isRender.current = true;
    cb();
    return;
  }

  const isDepChange = dep
    ? JSON.stringify(dep) !== JSON.stringify(prevDep.current)
    : true;

  if (isDepChange) {
    const cleanup = cb();
    if (cleanup && typeof cleanup === "function") {
      cleanup();
    }
  }

  prevDep.current = dep;
};

export default useCustomEffect;
