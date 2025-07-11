import { useRef } from "react";

const useCustomEffect = (cb: () => unknown, deps?: unknown[] | undefined) => {
  const useEffectRef = useRef<{
    isFirstRender: boolean;
    prevDeps: unknown[] | undefined;
    cleanup?: (() => void) | null;
  }>({
    isFirstRender: false,
    prevDeps: deps ? deps : [],
    cleanup: null,
  });

  const isDepsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(useEffectRef?.current?.prevDeps)
    : true;

  if (!useEffectRef?.current?.isFirstRender) {
    useEffectRef.current.isFirstRender = true;
    const cleanup = cb();
    if (typeof cleanup === "function") {
      useEffectRef.current.cleanup = cleanup;
    }
    return;
  }

  if (isDepsChanged) {
    if (useEffectRef?.current?.cleanup) {
      useEffectRef?.current?.cleanup();
    }

    cb();
  }

  if (deps) {
    useEffectRef.current.prevDeps = deps;
  }
};

export default useCustomEffect;
