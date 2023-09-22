import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import type { DistributedOmit } from "../../../types";
import { Landmark, type Props as LandmarkProps } from "../Landmark/Landmark";
import { useAccordion } from "./Accordion";
import type { HeaderObject } from "./Header";
import type { PanelObject } from "./Panel";

export type SectionObject = {
  collapse: () => boolean;
  expand: () => void;
  getHeader: () => State["header"];
  getOpen: () => State["open"];
};

type Props = DistributedOmit<LandmarkProps, "landmarkRole"> & {
  collapsible?: boolean | undefined;
  open?: State["open"] | undefined;
};

type SetState = Dispatch<SetStateAction<State>>;

type State = {
  header: HeaderObject | null;
  open: boolean;
  panel: PanelObject | null;
};

const registerHeader = (setState: SetState) => (header: HeaderObject) => {
  setState((prevState) =>
    prevState.header !== header ? { ...prevState, header } : prevState,
  );
};

const registerPanel = (setState: SetState) => (panel: PanelObject) => {
  setState((prevState) =>
    prevState.panel !== panel ? { ...prevState, panel } : prevState,
  );
};

export const useSection = () => {
  const setState = useContext(SetStateContext);

  if (setState === null) {
    throw new Error(""); // TODO: error message
  }

  return {
    registerHeader: registerHeader(setState),
    registerPanel: registerPanel(setState),
  };
};

const SetStateContext = createContext<SetState | null>(null);

export const Section = ({
  children,
  collapsible = true,
  open = false,
  ...rest
}: Props) => {
  const [state, setState] = useState<State>({
    header: null,
    open,
    panel: null,
  });

  const getHeader: SectionObject["getHeader"] = useCallback(
    () => state.header,
    [state.header],
  );

  const getOpen: SectionObject["getOpen"] = useCallback(
    () => state.open,
    [state.open],
  );

  const setOpen = useCallback((value: State["open"]) => {
    setState((prevState) =>
      prevState.open !== value ? { ...prevState, open: value } : prevState,
    );
  }, []);

  const collapse: SectionObject["collapse"] = useCallback(() => {
    if (collapsible) {
      setOpen(false);
    }

    return collapsible;
  }, [collapsible, setOpen]);

  const expand: SectionObject["expand"] = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const section = useMemo(
    () => ({
      collapse,
      expand,
      getHeader,
      getOpen,
    }),
    [collapse, expand, getHeader, getOpen],
  );

  const { registerSection } = useAccordion();

  useEffect(() => {
    registerSection(section);
  }, [registerSection, section]);

  useEffect(() => {
    if (state.header !== null && state.panel !== null) {
      state.header.setControls(state.panel.getId());
    }
  }, [state.header, state.panel]);

  useEffect(() => {
    if (state.header !== null && state.panel !== null) {
      state.header.setExpanded(state.open);
      state.panel.setHidden(!state.open);
    }
  }, [state.header, state.open, state.panel]);

  return (
    <Landmark landmarkRole="region" {...rest}>
      <SetStateContext.Provider value={setState}>
        {children}
      </SetStateContext.Provider>
    </Landmark>
  );
};
