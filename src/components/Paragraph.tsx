import type { JSX } from "react";

type Props = JSX.IntrinsicElements["p"];

export const Paragraph = ({ children, className, ...rest }: Props) => {
  return (
    <p className={`max-w-p ${className ?? ""}`} {...rest}>
      {children}
    </p>
  );
};
