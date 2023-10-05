import type { JSX } from "react";

import { cn } from "../../helpers";

type Props = JSX.IntrinsicElements["span"];

export const PhotoFrame = ({ children, className, ...rest }: Props) => {
  return (
    <span
      className={cn(
        "overflow-hidden rounded-full border-4 border-magenta bg-white",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
};
