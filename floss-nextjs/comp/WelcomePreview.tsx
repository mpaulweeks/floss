import { useTimer } from "@/hooks/useTimer";
import { Settings } from "@/types";
import { Dancer } from "./Dancer";

export function WelcomePreview(props: {
  settings: Settings;
}) {
  const { tick } = useTimer(props);

  return <Dancer
    settings={props.settings}
    size={300}
    tick={tick}
    offset={0}
    moreClassNames={[]}
  />;
}
