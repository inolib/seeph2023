import { forwardRef, type JSX } from "react";

import { cn } from "../../helpers";

type Props = Omit<JSX.IntrinsicElements["button"], "type">;

export const PrimaryButton = forwardRef(
  ({ children, className, ...rest }: Props, ref: Props["ref"]) => {
    return (
      <button
        className={cn(
          "rounded-lg font-bold bg-turquoise px-1 py-0.5 text-black hover:bg-blue hover:text-white disabled:cursor-not-allowed disabled:bg-gray disabled:text-black",
          className,
        )}
        ref={ref}
        type="button"
        {...rest}
      >
        {children}
      </button>
    );
  },
);

PrimaryButton.displayName = "PrimaryButton";
