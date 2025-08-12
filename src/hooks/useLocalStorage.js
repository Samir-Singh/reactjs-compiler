import { useState, useEffect } from "react";
const isBrowser = typeof window !== "undefined";

const useLocalStorage = (key, defaultValue) => {
  if (!key) {
    throw new Error("Key is required for useLocalStorage hook");
  }
  if (defaultValue === undefined) {
    throw new Error(
      "Default value is required or shouldn't be null for useLocalStorage hook"
    );
  }

  const [value, setValue] = useState(() => {
    if (!isBrowser) return defaultValue;
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || JSON.stringify(defaultValue)
      );
    } catch (err) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  const removeValue = () => {
    localStorage.removeItem(key);
    setValue(defaultValue);
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue, removeValue];
};

export default useLocalStorage;
