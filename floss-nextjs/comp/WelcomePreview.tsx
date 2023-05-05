import { Settings } from "@/types";
import { useEffect, useRef, useState } from "react";
import { Party } from "./Party";

export function WelcomePreview(props: {
  settings: Settings;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [element, setElement] = useState<HTMLElement>();

  useEffect(() => {
    if (elementRef.current) {
      setElement(elementRef.current);
    }
  }, [setElement]);

  return (
    <div ref={elementRef} style={{
      width: '300px',
      height: '300px',
    }}>
      {element && (
        <Party element={element} settings={props.settings} />
      )}
    </div>
  );
}
