import { useCallback, useEffect, useState } from "react";

type LocalStore = Record<string, string>;
export interface LocalStorage {
  get(key: string): string | undefined,
  set(key: string, value: string): void,
  remove(key: string): void,
}

function getLocalStorage() {
  return { ...window.localStorage, } as LocalStore;
}
export function useLocalStorage(): LocalStorage | undefined {
  const [ storage, setStorageState ] = useState<LocalStore | undefined>();

  useEffect(() => {
    // on load
    setStorageState(getLocalStorage());
  }, [setStorageState])

  const getStorage = useCallback((key: string) => {
    return (storage ?? {})[key];
  }, [storage]);
  const setStorage = useCallback((key: string, value: string) => {
    localStorage.setItem(key, value);
    setStorageState(getLocalStorage());
  }, [setStorageState]);
  const removeStorage = useCallback((key: string) => {
    localStorage.removeItem(key);
    setStorageState(getLocalStorage());
  }, [setStorageState]);

  return storage && {
    get: getStorage,
    set: setStorage,
    remove: removeStorage,
  };
}
