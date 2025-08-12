import { useEffect, useState } from "react";

const useDebounceValue = (value, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeId = setTimeout(() => {
      setDebounceValue(value);
      setLoading(false);
    }, [delay]);

    return () => clearTimeout(timeId);
  }, [value, delay]);

  return { debounceValue, loading };
};

export default useDebounceValue;
