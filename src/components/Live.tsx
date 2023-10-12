import type { JSX } from "react";

import { cn } from "../helpers";

type Props = JSX.IntrinsicElements["div"];

export const Live = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={cn(
        "flex items-center gap-[1ch] rounded-full border-[1px] border-white py-0.125 pl-0.5 pr-0.25 text-white after:h-[1.375rem] after:w-[1.375rem] after:rounded-full after:bg-turquoise",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
