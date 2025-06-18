import { useRef } from "react";

const useCustomEffect = (cb: () => unknown, deps: unknown[]) => {
  const isFirstRender = useRef(false);
  const prevDeps = useRef<unknown[]>([]);

  if (!isFirstRender.current) {
    isFirstRender.current = true;
    cb();
    return;
  }

  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

  if (depsChanged) {
    const cleanup = cb();
    if (cleanup && typeof cleanup === "function" && deps) {
      cleanup();
    }
  }

  prevDeps.current = deps || [];
};

export default useCustomEffect;
