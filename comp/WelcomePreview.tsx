import { Settings } from "@/types";
import { Party } from "./party/Party";
import { useElementRef } from "@/hooks/useElementRef";

export function WelcomePreview(props: {
  settings: Settings;
}) {
  const { element, ref } = useElementRef();
  return (
    <div ref={ref} style={{
      width: '300px',
      height: '300px',
    }}>
      {element && <Party element={element} settings={props.settings} /> }
    </div>
  );
}
