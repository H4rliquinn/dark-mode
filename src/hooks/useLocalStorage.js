import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {

  const [storedValue, setStoredValue] = useState((key,initialValue)=>{
    const origValue = JSON.parse(localStorage.getItem(key));
    if (origValue){
      return origValue;
    } else {
      return initialValue;
    } 
  });

  const setValue = value => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  return [storedValue, setValue];
};
