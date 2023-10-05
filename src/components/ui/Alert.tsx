import type { JSX } from "react";

type Props = Omit<JSX.IntrinsicElements["div"], "role">;

export const Alert = ({ children, ...rest }: Props) => {
  return (
    <div role="alert" {...rest}>
      {children}
    </div>
  );
};
