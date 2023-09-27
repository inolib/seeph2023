import { useCallback, useEffect, useId, useState, type JSX } from "react";

import { useBooking } from "../../routes/booking";

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
    <div className="flex items-center justify-center gap-3">
      <div>
        <label
          className={`flex cursor-pointer flex-col rounded-0.5 px-2 py-1 text-center ${
            isChecked ? "bg-blue-dark text-white" : "bg-gray"
          }`}
          htmlFor={confId}
        >
          {date}
          <br />
          <span className={`${isChecked ? "text-turquoise" : ""}`}>{time}</span>
        </label>

        <input
          checked={isChecked}
          className="sr-only"
          id={confId}
          onChange={handleCheckbox}
          readOnly
          type="checkbox"
        />
      </div>

      <div className="flex gap-1">
        <button
          aria-label={`Supprimez la dernière place ajoutée pour le ${date}`}
          className={`rounded-0.5 px-1 py-0.5 disabled:cursor-not-allowed ${
            !isChecked
              ? "bg-gray"
              : "bg-turquoise hover:bg-blue hover:text-white"
          }`}
          disabled={!isChecked}
          onClick={decrement}
          type="button"
        >
          &minus;
        </button>

        <input
          aria-label={`${count} place(s) pour le ${date}`}
          aria-live="polite"
          className="w-2 text-center"
          readOnly
          type="text"
          value={!isChecked ? "-" : count}
        />

        <button
          aria-label={`Ajoutez une place pour le ${date}`}
          className={`rounded-0.5 px-1 py-0.5 disabled:cursor-not-allowed ${
            !isChecked
              ? "bg-gray"
              : "bg-turquoise hover:bg-blue hover:text-white"
          }`}
          disabled={!isChecked}
          onClick={increment}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

// fix path
