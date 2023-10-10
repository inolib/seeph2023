import type { JSX } from "react";

import { cn } from "../../helpers";

type Props = Omit<JSX.IntrinsicElements["img"], "src">;

export const Logo = ({ alt = "", className, ...rest }: Props) => {
  return (
    <img
      alt={alt}
      className={cn("h-3", className)}
      src="logos/inolib.svg"
      {...rest}
    />
  );
};
