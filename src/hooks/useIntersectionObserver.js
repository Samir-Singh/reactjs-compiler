import { useEffect, useState } from "react";

const useIntersectionObserver = (ref, options) => {
  const [intersectionEntries, setIntersectionEntries] = useState(null);

  useEffect(() => {
    if (ref?.current && typeof IntersectionObserver === "function") {
      const callback = (entries) => {
        setIntersectionEntries(entries[0]);
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(ref?.current);
      return () => {
        setIntersectionEntries(null);
        observer.disconnect();
      };
    }
  }, [ref, options]);

  return intersectionEntries;
};

export default useIntersectionObserver;
