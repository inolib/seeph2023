import type { FieldElementProps } from "@modular-forms/react";

import type { Booking } from "./BookingForm";

type Props = {
  datetime: string;
  fieldProps: FieldElementProps<Booking, "datetime">;
};

export const SessionField = ({ datetime, fieldProps }: Props) => {
  return <input type="hidden" value={datetime} {...fieldProps} />;
};
