import { useRef } from "react";

const useCustomEffect = (cb: () => unknown, dep?: unknown[]) => {
  const isFirstRender = useRef(true);
  const prevDep = useRef<unknown[]>([...(dep || [])]);

  // First time render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    cb();
    return;
  }

  // Deps changes and no deps array
  const isDepsChanged = dep
    ? JSON.stringify(dep) !== JSON.stringify(prevDep.current)
    : true;
  if (isDepsChanged) {
    const cleanup = cb();

    // Cleanup
    if (cleanup && typeof cleanup === "function" && dep) {
      cleanup();
    }
  }
};

export default useCustomEffect;
