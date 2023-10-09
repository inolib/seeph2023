import type { JSX } from "react";

import { cn } from "../../helpers";

type Props = JSX.IntrinsicElements["span"];

export const PhotoFrame = ({ children, className, ...rest }: Props) => {
  return (
    <span
      className={cn(
        "flex-none overflow-hidden rounded-full border-4 border-blue-dark bg-white",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
};
