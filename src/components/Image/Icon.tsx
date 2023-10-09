import type { JSX } from "react";

import { cn } from "../../helpers";

type Props = JSX.IntrinsicElements["span"];

export const Icon = ({ children, className, ...rest }: Props) => {
  return (
    <span
      className={cn(
        "flex flex-none items-center justify-center rounded-full text-center",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
};
