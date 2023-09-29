import { forwardRef, type JSX } from "react";

import { cn } from "../../helpers";

type Props = JSX.IntrinsicElements["span"];

export const PhotoFrame = forwardRef(
  ({ children, className, ...rest }: Props, ref: Props["ref"]) => {
    return (
      <span
        className={cn(
          "overflow-hidden rounded-full border-4 border-magenta bg-white",
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

PhotoFrame.displayName = "PhotoFrame";
