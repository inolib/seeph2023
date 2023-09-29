import { forwardRef, type JSX } from "react";

import { cn } from "../../helpers";

type Props = JSX.IntrinsicElements["a"];

export const ExternalLink = forwardRef(
  ({ children, className, ...rest }: Props, ref: Props["ref"]) => {
    return (
      <a
        className={cn(
          "rounded-full bg-blue px-1 py-0.5 text-center font-bold text-white hover:bg-turquoise hover:text-black",
          className,
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </a>
    );
  },
);

ExternalLink.displayName = "ExternalLink";
