import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "className"
> & {
  variant: "";
};

export const Button = ({ children, variant, ...rest }: Props) => {
  let className;

  switch (className) {
    case "": {
      break;
    }
  }

  return <button {...rest}>{children}</button>;
};
