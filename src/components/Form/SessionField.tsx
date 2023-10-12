import {
  getValue,
  type FieldElementProps,
  type FormStore,
} from "@modular-forms/react";
import { useId, type JSX } from "react";

import { cn } from "../../helpers";
import type { Booking } from "./BookingForm";

type Props = {
  datetime: string;
  disabled?: JSX.IntrinsicElements["input"]["disabled"];
  fieldProps: FieldElementProps<Booking, "datetime">;
  form: FormStore<Booking, undefined>;
  session: {
    date: string;
    label: string;
    time: string;
  };
};

export const SessionField = ({
  datetime,
  disabled,
  fieldProps,
  form,
  session,
}: Props) => {
  const id = useId();
  const isChecked = getValue(form, "datetime") === datetime;

  return (
    <div className="relative">
      <input
        className="absolute left-0 top-0 -z-10 h-full w-full"
        disabled={disabled}
        id={id}
        type="radio"
        value={datetime}
        {...fieldProps}
      />

      <label
        className={cn(
          "flex cursor-pointer flex-col rounded-lg bg-gray p-1 text-center",
          {
            "bg-blue-dark text-white": isChecked,
          },
        )}
        htmlFor={id}
      >
        <span aria-label={session.label}>{session.date}</span>
        <br />
        <span className={cn("-mt-1", { "text-turquoise": isChecked })}>
          {session.time}
        </span>
      </label>
    </div>
  );
};
