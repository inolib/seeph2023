import { Heading as BaseHeading, type Props as BaseProps } from "../Heading";

import { useLandmark } from "./Landmark";

export type Props = Omit<BaseProps, "level">;

export const Heading = ({ children, ...rest }: Props) => {
  const { level } = useLandmark();

  return (
    <BaseHeading level={level} {...rest}>
      {children}
    </BaseHeading>
  );
};
