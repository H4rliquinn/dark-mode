import { useEffect } from 'react';
import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = (initState) => {
    const [value,setValue]=useLocalStorage('darkMode',initState);
    useEffect(()=>{
        if (value){
            if (!document.body.classList.contains('dark-mode')){document.body.classList.add('dark-mode');};
        } else {
            if (document.body.classList.contains('dark-mode')){document.body.classList.remove('dark-mode');};
        }
    },[value])

  return [value,setValue];
};