import type { JSX } from "react";

type Props = JSX.IntrinsicElements["div"];

export const ContentBoxLayout = ({ children, className, ...rest }: Props) => {
  return (
    <div className={`p-2 1130:p-4 1240:p-6 ${className ?? ""}`} {...rest}>
      {children}
    </div>
  );
};
