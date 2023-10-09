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
    <>
      <input
        className={cn("sr-only", {
          "peer/xx": datetime === "2023-11-20T11:00:00.000Z",
          "peer/xxi": datetime === "2023-11-21T11:00:00.000Z",
          "peer/xxiii": datetime === "2023-11-23T16:00:00.000Z",
          "peer/xxiv": datetime === "2023-11-24T16:00:00.000Z",
        })}
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
          {
            "peer/xx:outline peer/xx:outline-2 peer/xx:outline-black":
              datetime === "2023-11-20T11:00:00.000Z",
            "peer/xxi:outline peer/xxi:outline-2 peer/xxi:outline-black":
              datetime === "2023-11-21T11:00:00.000Z",
            "peer/xxiii:outline peer/xxiii:outline-2 peer/xxiii:outline-black":
              datetime === "2023-11-23T16:00:00.000Z",
            "peer/xxiv:outline peer/xxiv:outline-2 peer/xxiv:outline-black":
              datetime === "2023-11-24T16:00:00.000Z",
          },
        )}
        htmlFor={id}
      >
        <span>{session.date}</span>
        <span className={cn({ "text-turquoise": isChecked })}>
          {session.time}
        </span>
      </label>
    </>
  );
};
