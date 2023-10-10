import type { JSX } from "react";

import { cn } from "../../helpers";

type Props = JSX.IntrinsicElements["span"];

export const FiveStars = ({ className, ...rest }: Props) => {
  return (
    <span className={cn("flex gap-0.5", className)} {...rest}>
      <img alt="" src="icons/star.svg" />
      <img alt="" src="icons/star.svg" />
      <img alt="" src="icons/star.svg" />
      <img alt="" src="icons/star.svg" />
      <img alt="" src="icons/star.svg" />
    </span>
  );
};
