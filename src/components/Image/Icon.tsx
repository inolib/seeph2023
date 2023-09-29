import { forwardRef, type JSX } from "react";

import { cn } from "../../helpers";

type Props = JSX.IntrinsicElements["span"];

export const Icon = forwardRef(
  ({ children, className, ...rest }: Props, ref: Props["ref"]) => {
    return (
      <span
        className={cn(
          "flex items-center justify-center rounded-full text-center",
          className,
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </span>
    );
  },
);

Icon.displayName = "Icon";
