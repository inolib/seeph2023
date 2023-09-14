import {
  createContext,
  useContext,
  type DetailedHTMLProps,
  type FormHTMLAttributes,
  type HTMLAttributes,
} from "react";

import { Heading } from "./Heading";

type Props =
  | (Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
      "role"
    > & {
      role:
        | "banner"
        | "complementary"
        | "contentinfo"
        | "main"
        | "navigation"
        | "region";
    })
  | (Omit<
      DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
      "role"
    > & {
      role: "form";
    })
  | (Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      "role"
    > & {
      role: "search";
    });

const LevelContext = createContext(0);

export const useLandmark = () => {
  const level = useContext(LevelContext);

  return {
    level,
  };
};

export const Landmark = (props: Props) => {
  const { level } = useLandmark();

  switch (props.role) {
    case "banner": {
      const { children, ...rest } = props;

      return (
        <header {...rest}>
          <LevelContext.Provider value={level + 1}>
            {children}
          </LevelContext.Provider>
        </header>
      );
    }

    case "complementary": {
      const { children, ...rest } = props;

      return (
        <aside {...rest}>
          <LevelContext.Provider value={(level === 0 ? level + 1 : level) + 1}>
            {children}
          </LevelContext.Provider>
        </aside>
      );
    }

    case "contentinfo": {
      const { children, ...rest } = props;

      return (
        <footer {...rest}>
          <LevelContext.Provider value={(level === 0 ? level + 1 : level) + 1}>
            {children}
          </LevelContext.Provider>
        </footer>
      );
    }

    case "form": {
      const { children, ...rest } = props;

      return (
        <form {...rest}>
          <LevelContext.Provider value={(level === 0 ? level + 1 : level) + 1}>
            {children}
          </LevelContext.Provider>
        </form>
      );
    }

    case "main": {
      const { children, ...rest } = props;

      return (
        <main {...rest}>
          <LevelContext.Provider value={(level === 0 ? level + 1 : level) + 1}>
            {children}
          </LevelContext.Provider>
        </main>
      );
    }

    case "navigation": {
      const { children, ...rest } = props;

      return (
        <nav {...rest}>
          <LevelContext.Provider value={(level === 0 ? level + 1 : level) + 1}>
            {children}
          </LevelContext.Provider>
        </nav>
      );
    }

    case "region": {
      const { children, ...rest } = props;

      return (
        <section {...rest}>
          <LevelContext.Provider value={(level === 0 ? level + 1 : level) + 1}>
            {children}
          </LevelContext.Provider>
        </section>
      );
    }

    case "search": {
      const { children, ...rest } = props;

      return (
        <div {...rest}>
          <LevelContext.Provider value={(level === 0 ? level + 1 : level) + 1}>
            {children}
          </LevelContext.Provider>
        </div>
      );
    }
  }
};

Landmark.Heading = Heading;
