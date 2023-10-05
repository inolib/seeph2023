import { forwardRef, type JSX } from "react";

type Props = JSX.IntrinsicElements["a"];

export const ExternalLink = forwardRef(
  ({ children, ...rest }: Props, ref: Props["ref"]) => {
    return (
      <a ref={ref} rel="noreferrer" {...rest}>
        {children}
      </a>
    );
  },
);

ExternalLink.displayName = "ExternalLink";
