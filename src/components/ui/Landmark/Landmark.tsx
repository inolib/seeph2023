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

export const Landmark = ({ children, role, ...rest }: Props) => {
  const { level } = useLandmark();

  switch (role) {
    case "banner": {
      return (
        <header {...rest}>
          <LevelContext.Provider value={level + 1}>
            {children}
          </LevelContext.Provider>
        </header>
      );
    }

    case "complementary": {
      return (
        <aside {...rest}>
          <LevelContext.Provider value={level + 1}>
            {children}
          </LevelContext.Provider>
        </aside>
      );
    }

    case "contentinfo": {
      return (
        <footer {...rest}>
          <LevelContext.Provider value={level + 1}>
            {children}
          </LevelContext.Provider>
        </footer>
      );
    }

    case "form": {
      return (
        <form {...rest}>
          <LevelContext.Provider value={level + 1}>
            {children}
          </LevelContext.Provider>
        </form>
      );
    }

    case "main": {
      return (
        <main {...rest}>
          <LevelContext.Provider value={level + 1}>
            {children}
          </LevelContext.Provider>
        </main>
      );
    }

    case "navigation": {
      return (
        <nav {...rest}>
          <LevelContext.Provider value={level + 1}>
            {children}
          </LevelContext.Provider>
        </nav>
      );
    }

    case "region": {
      return (
        <section {...rest}>
          <LevelContext.Provider value={level + 1}>
            {children}
          </LevelContext.Provider>
        </section>
      );
    }

    case "search": {
      return (
        <div role="search" {...rest}>
          <LevelContext.Provider value={level + 1}>
            {children}
          </LevelContext.Provider>
        </div>
      );
    }
  }
};

Landmark.Heading = Heading;
