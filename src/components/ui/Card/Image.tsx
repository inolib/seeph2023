import type { DetailedHTMLProps, ImgHTMLAttributes } from "react";

type Props = Omit<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
  "alt"
> & {
  alt: string;
};

export const Image = ({ alt, ...rest }: Props) => {
  return <img alt={alt} {...rest} />;
};
