import { useEffect, useRef, useState } from "react";

export function useElementRef() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [element, setElement] = useState<HTMLElement>();

  useEffect(() => {
    if (elementRef.current) {
      setElement(elementRef.current);
    }
  }, [setElement]);

  return { element, ref: elementRef, };
}
