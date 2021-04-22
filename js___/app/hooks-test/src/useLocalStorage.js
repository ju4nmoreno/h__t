import { useState } from 'react';

export function useLocalStorage(key, initValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = JSON.parse(window.localStorage.getItem(key));
      return value;
    } catch (e) {
      return initValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      return value;
    }
  };

  return [storedValue, setValue];
}
