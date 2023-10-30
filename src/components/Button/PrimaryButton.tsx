import type { JSX } from "react";

import { cn } from "../../helpers";
import { styles } from "../../styles";

type Props = JSX.IntrinsicElements["button"];

export const PrimaryButton = ({
  children,
  className,
  type = "button",
  ...rest
}: Props) => {
  return (
    <button
      className={cn(
        styles.outline("black"),
        "rounded-lg bg-turquoise px-1 py-0.5 font-bold text-black hover:bg-blue disabled:cursor-not-allowed disabled:bg-gray",
        className,
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
