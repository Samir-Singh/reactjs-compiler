import { useRef } from "react";

const useDebounceFunction = (cb, delay = 500) => {
  const timerRef = useRef(null);
  return function debouncedFunction(...args) {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

export default useDebounceFunction;
