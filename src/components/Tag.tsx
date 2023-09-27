import type { JSX } from "react";

type Props = JSX.IntrinsicElements["span"];

export const Tag = ({ children, className, ...rest }: Props) => {
  return (
    <span
      className={`rounded-0.5 bg-magenta px-1 py-0.5 font-bold text-white ${
        className ?? ""
      }`}
      {...rest}
    >
      {children}
    </span>
  );
};
