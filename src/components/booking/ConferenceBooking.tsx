import {
  useCallback,
  useEffect,
  useId,
  useState,
  type MouseEventHandler,
} from "react";

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

  const decrement: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault();
      if (count > 0) {
        setCount(count - 1);
      }
    },
    [count],
  );

  const increment: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault();
      setCount(count + 1);
    },
    [count],
  );

  const handleCheckbox: MouseEventHandler<HTMLInputElement> =
    useCallback(() => {
      setIsChecked(!isChecked);
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
    <div className="my-8 flex items-center justify-center gap-4">
      <input
        className="sr-only"
        defaultChecked={isChecked}
        id={confId}
        name=""
        onClick={handleCheckbox}
        type="checkbox"
      />
      <label
        className={`flex flex-col rounded-lg px-4 py-2 text-center ${
          isChecked ? "bg-indigo-500" : ""
        }`}
        htmlFor={confId}
      >
        <span>{date}</span>
        <span>{time}</span>
      </label>

      <div className="">
        <button
          aria-label={`Diminuez la quantité de places pour le ${date}`}
          className="rounded-lg bg-green-400 px-4 py-2 hover:bg-blue-500"
          disabled={!isChecked}
          onClick={decrement}
        >
          &minus;
        </button>
        <input
          aria-label={`Nombre de places pour le ${date} ${count}`}
          aria-live="polite"
          className="w-8 text-center"
          name=""
          readOnly
          type="text"
          value={count}
        />
        <button
          aria-label={`Augmentez la quantité de places pour le ${date}`}
          className="rounded-lg bg-green-400 px-4 py-2 hover:bg-blue-500"
          disabled={!isChecked}
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};
