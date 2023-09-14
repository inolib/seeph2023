import type { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Content = ({ children, ...rest }: Props) => {
  return <div {...rest}>{children}</div>;
};
