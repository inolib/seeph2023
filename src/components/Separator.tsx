import type { JSX } from "react";

type Props = JSX.IntrinsicElements["span"];

export const Separator = ({ className }: Props) => {
  return (
    <span
      className={`inline-block h-0.25 w-8 rounded-full ${className ?? ""}`}
    />
  );
};
