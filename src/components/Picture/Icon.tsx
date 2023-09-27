import type { JSX } from "react";

type Props = JSX.IntrinsicElements["img"];

export const Icon = ({ alt, className, src, ...rest }: Props) => {
  return (
    <span className="relative top-0.25 flex h-2 w-2 flex-none items-center justify-center rounded-full bg-magenta">
      <img alt={alt} className={className ?? ""} src={src} {...rest} />
    </span>
  );
};
