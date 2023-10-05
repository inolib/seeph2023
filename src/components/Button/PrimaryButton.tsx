import type { JSX } from "react";

import { cn } from "../../helpers";

type Props = JSX.IntrinsicElements["button"];

export const PrimaryButton = ({
  children,
  className,
  type,
  ...rest
}: Props) => {
  return (
    <button
      className={cn(
        "rounded-lg bg-turquoise px-1 py-0.5 font-bold text-black hover:bg-blue hover:text-white disabled:cursor-not-allowed disabled:bg-gray disabled:text-black",
        className,
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
