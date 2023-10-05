import type { JSX } from "react";

import { cn } from "../helpers";

type Props = JSX.IntrinsicElements["div"];

export const Tag = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={cn(
        "rounded-lg bg-magenta px-0.5 py-0.25 text-white",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
