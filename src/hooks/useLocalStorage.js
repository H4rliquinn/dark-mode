
import { useState } from 'react';

export const useDarkStorage = (key, init) => {

  const item = JSON.parse(localStorage.getItem(key));

  const [val, setVal] = useState(item || init);

  const setValue = val => {
    localStorage.setItem(key, JSON.stringify(val));
    setVal(val);
  };

  return [val, setValue];
};
