import type { JSX } from "react";

type Props = JSX.IntrinsicElements["img"];

export const PictureFrame = ({ alt, className, src, ...rest }: Props) => {
  return (
    <img
      alt={alt}
      className={`rounded-full border-4 border-solid border-blue-dark bg-white ${
        className ?? ""
      }`}
      src={src}
      {...rest}
    />
  );
};
