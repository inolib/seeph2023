import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import {
  Header,
  type ClickHandler as HeaderClickHandler,
  type KeyUpHandler as HeaderKeyUpHandler,
} from "./Header";
import { Panel } from "./Panel";
import { Section, type SectionObject } from "./Section";

type Props = Omit<JSX.IntrinsicElements["div"], "style"> & {
  multiExpandable?: boolean | undefined;
};

type SetState = Dispatch<SetStateAction<State>>;

type State = {
  sections: SectionObject[];
};

const registerSection = (setState: SetState) => (section: SectionObject) => {
  setState((prevState) =>
    !prevState.sections.includes(section)
      ? { ...prevState, sections: [...prevState.sections, section] }
      : prevState,
  );
};

export const useAccordion = () => {
  const setState = useContext(SetStateContext);

  if (setState === null) {
    throw new Error(""); // TODO: error message
  }

  return {
    registerSection: registerSection(setState),
  };
};

const SetStateContext = createContext<SetState | null>(null);

export const Accordion = ({
  children,
  multiExpandable = true,
  ...rest
}: Props) => {
  const [state, setState] = useState<State>({
    sections: [],
  });

  const toggleSection = useCallback(
    (section: SectionObject) => {
      if (section.getOpen()) {
        section.collapse();
      } else {
        if (multiExpandable) {
          section.expand();
        } else {
          const expandedSections = state.sections.filter((section) =>
            section.getOpen(),
          );

          switch (expandedSections.length) {
            case 0: {
              section.expand();
              break;
            }

            case 1: {
              if (expandedSections[0].collapse()) {
                section.expand();
              }
              break;
            }
          }
        }
      }
    },
    [multiExpandable, state.sections],
  );

  const handleHeaderClick = useCallback(
    (section: SectionObject): HeaderClickHandler =>
      (event) => {
        if (event.detail > 0 && event.button === 0) {
          toggleSection(section);
        }
      },
    [toggleSection],
  );

  const handleHeaderKeyUp = useCallback(
    (section: SectionObject): HeaderKeyUpHandler =>
      (event) => {
        if (event.code === "Enter" || event.code === "Space") {
          toggleSection(section);
        }
      },
    [toggleSection],
  );

  useEffect(() => {
    for (const section of state.sections) {
      const header = section.getHeader();

      if (header !== null) {
        header.addEventHandler("click", handleHeaderClick(section));
        header.addEventHandler("keyup", handleHeaderKeyUp(section));
      }
    }
  }, [handleHeaderClick, handleHeaderKeyUp, state.sections]);

  return (
    <div {...rest}>
      <SetStateContext.Provider value={setState}>
        {children}
      </SetStateContext.Provider>
    </div>
  );
};

Accordion.Header = Header;
Accordion.Panel = Panel;
Accordion.Section = Section;
