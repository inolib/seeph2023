import type { JSX } from "react";

import { cn } from "../helpers";

type Props = JSX.IntrinsicElements["div"];

export const Live = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={cn(
        "flex items-center gap-0.25 rounded-full border-2 border-white px-0.25 py-0.125 text-sm text-white after:h-[1rem] after:w-[1rem] after:rounded-full after:bg-turquoise",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
