import {
  createContext,
  useContext,
  type DetailedHTMLProps,
  type HTMLAttributes,
} from "react";

import { Heading } from "./Heading";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const LevelContext = createContext(0);

export const useSection = () => {
  const level = useContext(LevelContext);

  return {
    level,
  };
};

export const Section = ({ children, ...rest }: Props) => {
  const { level } = useSection();

  return (
    <section {...rest}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
};

Section.Heading = Heading;
