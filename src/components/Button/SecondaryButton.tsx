import type { JSX } from "react";

import { cn } from "../../helpers";

type Props = JSX.IntrinsicElements["button"];

export const SecondaryButton = ({
  children,
  className,
  type = "button",
  ...rest
}: Props) => {
  return (
    <button
      className={cn(
        "rounded-lg bg-white px-1 py-0.5 font-bold text-black hover:bg-blue hover:text-gray disabled:cursor-not-allowed disabled:bg-white disabled:text-black",
        className,
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
