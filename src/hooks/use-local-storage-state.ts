import { useEffect, useState } from "react";

export function useLocalStorageState<T>(
  key: string,
  initialValue: T | (() => T)
) {
  const [state, setState] = useState<T>(() => {
    const init = typeof initialValue === "function" ? (initialValue as () => T)() : initialValue;
    if (typeof window === "undefined") return init;

    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : init;
    } catch {
      return init;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch {
      // ignore write errors (private mode, quota, etc.)
    }
  }, [key, state]);

  return [state, setState] as const;
}
