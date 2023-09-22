import { useCallback, useEffect, useId, useMemo, useState } from "react";

import { useSection } from "./Section";

export type PanelObject = {
  getId: () => string;
  setHidden: (value: State["hidden"]) => void;
};

type Props = Omit<JSX.IntrinsicElements["div"], "id" | "style">;

type State = {
  hidden: boolean;
};

export const Panel = ({ children, ...rest }: Props) => {
  const id = useId();

  const [state, setState] = useState<State>({
    hidden: true,
  });

  const getId: PanelObject["getId"] = useCallback(() => id, [id]);

  const setHidden: PanelObject["setHidden"] = useCallback((value) => {
    setState((prevState) =>
      prevState.hidden !== value ? { ...prevState, hidden: value } : prevState,
    );
  }, []);

  const panel = useMemo(
    () => ({
      getId,
      setHidden,
    }),
    [getId, setHidden],
  );

  const { registerPanel } = useSection();

  useEffect(() => {
    registerPanel(panel);
  }, [panel, registerPanel]);

  return (
    <div
      id={id}
      style={state.hidden ? { display: "none" } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
};
