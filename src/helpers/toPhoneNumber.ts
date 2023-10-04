import { toCustom, type TransformOptions } from "@modular-forms/react";
import { formatIncompletePhoneNumber } from "libphonenumber-js";

export const toPhoneNumber = (options: TransformOptions) => {
  return toCustom(
    (value) => formatIncompletePhoneNumber(new String(value).toString()),
    options,
  );
};
