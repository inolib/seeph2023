import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type KeyboardEventHandler,
  type MouseEventHandler,
} from "react";

import { handleEvent } from "../../../helpers/handleEvent";
import { Heading } from "../Landmark/Heading";
import { useSection } from "./Section";

export type HeaderObject = {
  addEventHandler: <K extends keyof Handlers>(
    type: K,
    handler: Handlers[K],
  ) => void;
  getExpanded: () => State["expanded"];
  setControls: (value: State["controls"]) => void;
  setExpanded: (value: State["expanded"]) => void;
};

export type ClickHandler = MouseEventHandler<HTMLButtonElement>;

export type KeyUpHandler = KeyboardEventHandler<HTMLButtonElement>;

type Handlers = {
  click: ClickHandler;
  keyup: KeyUpHandler;
};

type Props = Omit<
  JSX.IntrinsicElements["button"],
  "aria-controls" | "aria-expanded" | "role" | "style" | "type"
>;

type State = {
  controls: string;
  expanded: boolean;
  handlers: {
    [K in keyof Handlers]: Handlers[K][];
  };
};

export const Header = ({
  children,
  onClick = () => undefined,
  onKeyUp = () => undefined,
  ...rest
}: Props) => {
  const [state, setState] = useState<State>({
    controls: "",
    expanded: false,
    handlers: {
      click: [onClick],
      keyup: [onKeyUp],
    },
  });

  const addEventHandler: HeaderObject["addEventHandler"] = useCallback(
    (type, handler) => {
      setState((prevState) =>
        !prevState.handlers[type].includes(handler)
          ? {
              ...prevState,
              handlers: {
                ...prevState.handlers,
                [type]: [...prevState.handlers[type], handler],
              },
            }
          : prevState,
      );
    },
    [],
  );

  const getExpanded: HeaderObject["getExpanded"] = useCallback(
    () => state.expanded,
    [state.expanded],
  );

  const setControls: HeaderObject["setControls"] = useCallback((value) => {
    setState((prevState) =>
      prevState.controls !== value
        ? { ...prevState, controls: value }
        : prevState,
    );
  }, []);

  const setExpanded: HeaderObject["setExpanded"] = useCallback((value) => {
    setState((prevState) =>
      prevState.expanded !== value
        ? { ...prevState, expanded: value }
        : prevState,
    );
  }, []);

  const header = useMemo(
    () => ({
      addEventHandler,
      getExpanded,
      setControls,
      setExpanded,
    }),
    [addEventHandler, getExpanded, setControls, setExpanded],
  );

  const { registerHeader } = useSection();

  useEffect(() => {
    registerHeader(header);
  }, [header, registerHeader]);

  return (
    <Heading>
      <button
        aria-controls={state.controls}
        aria-expanded={state.expanded}
        onClick={handleEvent(state.handlers.click)}
        onKeyUp={handleEvent(state.handlers.keyup)}
        type="button"
        {...rest}
      >
        {children}
      </button>
    </Heading>
  );
};
