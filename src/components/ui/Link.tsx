import {
  Link as BaseLink,
  type LinkProps as BaseProps,
} from "react-router-dom";

type Props = Omit<BaseProps, "className"> & {
  variant: "blue-button";
};

export const Link = ({ children, variant, ...rest }: Props) => {
  let className;

  switch (variant) {
    case "blue-button": {
      className = "";
      break;
    }
  }

  return (
    <BaseLink className={className} {...rest}>
      {children}
    </BaseLink>
  );
};
