import { useCallback, useState } from "react";

type LocalStorage = Record<string, string>;

function getLocalStorage() {
  return { ...localStorage, } as LocalStorage;
}
export function useLocalStorage() {
  const [ storage, setStorageState ] = useState(getLocalStorage());

  const setStorage = useCallback((key: string, value: string) => {
    localStorage.setItem(key, value);
    setStorageState(getLocalStorage());
  }, [setStorageState]);

  return { storage, setStorage };
}
