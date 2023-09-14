import {
  Heading as BaseHeading,
  type Props as BaseProps,
} from "../Landmark/Heading";

type Props = BaseProps;

export const Heading = ({ children, ...rest }: Props) => {
  return <BaseHeading {...rest}>{children}</BaseHeading>;
};
