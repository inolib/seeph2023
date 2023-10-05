import type { JSX } from "react";

type Props = JSX.IntrinsicElements["a"];

export const ExternalLink = ({ children, ...rest }: Props) => {
  return (
    <a rel="noreferrer" {...rest}>
      {children}
    </a>
  );
};
