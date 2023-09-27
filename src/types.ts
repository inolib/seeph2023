import type { JSX } from "react";

export type DistributedOmit<
  T,
  K extends string | number | symbol,
> = T extends unknown ? Omit<T, K> : never;

type JSXIntrinsicElements = {
  [K in keyof JSX.IntrinsicElements]: JSX.IntrinsicElements[K] & { TagName: K };
};

export type PolymorphicProps<
  T extends keyof JSXIntrinsicElements = keyof JSXIntrinsicElements,
> = JSXIntrinsicElements[T];
