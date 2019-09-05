import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const origValue = localStorage.getItem(key);
  console.log("ORIG",origValue)

  
  //Won't use stored value on refresh
  // const [storedValue, setStoredValue] = useState((origValue.isNull?initialValue:Boolean(origValue)));
  // var cv=false;
  // if (origValue.isNull){
  //   console.log("Null")
  //   cv=initialValue;
  // }else{
  //   console.log("NotNull")
  //   cv=Boolean(origValue);
  // }
  const [storedValue, setStoredValue] = useState(initialValue);

  const setValue = value => {
    localStorage.setItem(key, Boolean(value));
    setStoredValue(Boolean(value));
    // console.log("SET",value,key,"Updated",localStorage.getItem(key))  
  };

  return [storedValue, setValue];
};
