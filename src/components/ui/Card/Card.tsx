import type { DetailedHTMLProps, HTMLAttributes } from "react";

import { Content } from "./Content";
import { Heading } from "./Heading";
import { Image } from "./Image";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  variant: "";
};

export const Card = ({ children, variant, ...rest }: Props) => {
  return <div {...rest}>{children}</div>;
};

Card.Content = Content;
Card.Heading = Heading;
Card.Image = Image;
