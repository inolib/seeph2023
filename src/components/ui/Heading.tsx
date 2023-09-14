import type { DetailedHTMLProps, HTMLAttributes } from "react";

export type Props = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
  "aria-level" | "role"
> & {
  level: number;
};

export const Heading = ({ children, level, ...rest }: Props) => {
  if (!Number.isInteger(level) || level < 1) {
    throw new Error(""); // TODO: error message
  }

  switch (level) {
    case 1: {
      return <h1 {...rest}>{children}</h1>;
    }

    case 2: {
      return <h2 {...rest}>{children}</h2>;
    }

    case 3: {
      return <h3 {...rest}>{children}</h3>;
    }

    case 4: {
      return <h4 {...rest}>{children}</h4>;
    }

    case 5: {
      return <h5 {...rest}>{children}</h5>;
    }

    case 6: {
      return <h6 {...rest}>{children}</h6>;
    }

    default: {
      return (
        <div aria-level={level} role="heading" {...rest}>
          {children}
        </div>
      );
    }
  }
};
