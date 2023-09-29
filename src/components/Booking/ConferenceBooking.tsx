import { useCallback, useEffect, useId, useState, type JSX } from "react";

import { cn } from "../../helpers";
import { useBooking } from "../../routes/booking";
import { PrimaryButton } from "../Button/PrimaryButton";

export type Data = {
  date: Props["date"];
  time: Props["time"];
  attendeeCount: number;
  isBooked: boolean;
};

type Props = {
  date: string;
  time: string;
};

export const ConferenceBooking = ({ date, time }: Props) => {
  const confId = useId();

  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const { registerConferenceBooking } = useBooking();

  const decrement: NonNullable<JSX.IntrinsicElements["button"]["onClick"]> =
    useCallback(() => {
      setCount((count) => (count > 0 ? count - 1 : count));
      setIsChecked(() => (count === 1 ? false : true));
    }, [count]);

  const increment: NonNullable<JSX.IntrinsicElements["button"]["onClick"]> =
    useCallback(() => {
      setCount((count) => count + 1);
    }, []);

  const handleCheckbox: NonNullable<
    JSX.IntrinsicElements["input"]["onChange"]
  > = useCallback(() => {
    setCount(() => (!isChecked ? 1 : 0));
    setIsChecked((isChecked) => !isChecked);
  }, [isChecked]);

  useEffect(() => {
    registerConferenceBooking({
      date,
      time,
      attendeeCount: count,
      isBooked: isChecked,
    });
  }, [count, date, isChecked, registerConferenceBooking, time]);

  return (
    <div className="flex flex-col items-center gap-1">
      <label
        className={cn(
          "flex cursor-pointer flex-col rounded-lg bg-gray p-1 text-center",
          {
            "bg-blue-dark text-white": isChecked,
          },
        )}
        htmlFor={confId}
      >
        {date}
        <br />
        <span className={cn({ "text-turquoise": isChecked })}>{time}</span>
      </label>

      <input
        checked={isChecked}
        className="sr-only"
        id={confId}
        onChange={handleCheckbox}
        readOnly
        type="checkbox"
      />

      <div>
        <PrimaryButton
          aria-label={`Supprimez la dernière place ajoutée pour le ${date}`}
          disabled={!isChecked}
          onClick={decrement}
        >
          &minus;
        </PrimaryButton>

        <input
          aria-label={`${count} places pour le ${date}`}
          aria-live="polite"
          className="w-2 text-center"
          readOnly
          type="text"
          value={!isChecked ? "-" : count}
        />

        <PrimaryButton
          aria-label={`Ajoutez une place pour le ${date}`}
          disabled={!isChecked}
          onClick={increment}
        >
          +
        </PrimaryButton>
      </div>
    </div>
  );
};
