import { forwardRef, type JSX, type PropsWithoutRef } from "react";

type Props = Omit<PropsWithoutRef<JSX.IntrinsicElements["div"]>, "role">;

export const Alert = forwardRef<HTMLDivElement, Props>(
  ({ children, ...rest }, ref) => {
    return (
      <div ref={ref} role="alert" {...rest}>
        {children}
      </div>
    );
  },
);

Alert.displayName = "Alert";
