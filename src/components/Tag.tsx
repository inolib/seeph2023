import { forwardRef, type JSX } from "react";

import { cn } from "../helpers";

type Props = JSX.IntrinsicElements["div"];

export const Tag = forwardRef(
  ({ children, className, ...rest }: Props, ref: Props["ref"]) => {
    return (
      <div
        className={cn(
          "rounded-lg bg-magenta px-0.5 py-0.25 text-white",
          className,
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

Tag.displayName = "Tag";
