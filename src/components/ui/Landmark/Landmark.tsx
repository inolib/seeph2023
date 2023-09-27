import { createContext, useContext } from "react";

import type { PolymorphicProps } from "../../../types";
import { Heading } from "./Heading";

export type Props = PolymorphicProps<
  "aside" | "footer" | "form" | "header" | "main" | "nav" | "search" | "section"
>;

const LevelContext = createContext(0);

export const useLandmark = () => {
  const level = useContext(LevelContext);

  return {
    level,
  };
};

export const Landmark = (props: Props) => {
  const { level } = useLandmark();

  switch (props.TagName) {
    case "form": {
      const { children, TagName, ...rest } = props;

      return (
        <TagName {...rest}>
          <LevelContext.Provider value={level + 1}>
            {children}
          </LevelContext.Provider>
        </TagName>
      );
    }

    default: {
      const { children, TagName, ...rest } = props;

      return (
        <TagName {...rest}>
          <LevelContext.Provider value={level + 1}>
            {children}
          </LevelContext.Provider>
        </TagName>
      );
    }
  }
};

Landmark.Heading = Heading;
