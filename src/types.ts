export type DistributedOmit<
  T,
  K extends string | number | symbol,
> = T extends unknown ? Omit<T, K> : never;
