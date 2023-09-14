import { Heading as BaseHeading, type Props as BaseProps } from "../Heading";

import { useSection } from "./Section";

type Props = Omit<BaseProps, "level">;

export const Heading = ({ children, ...rest }: Props) => {
  const { level } = useSection();

  return (
    <BaseHeading level={level} {...rest}>
      {children}
    </BaseHeading>
  );
};
