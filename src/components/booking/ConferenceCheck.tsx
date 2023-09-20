import { useEffect, useId, useState, type MouseEventHandler } from "react";

import { useBooking } from "../../routes/booking";

export type ConferenceCheckData = {
  count: number;
  date: Props["date"];
  isChecked: boolean;
  time: Props["time"];
};

type Props = {
  date: string;
  time: string;
};

export const ConferenceCheck = ({ date, time }: Props) => {
  const confId = useId();

  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const { registerConferenceCheck } = useBooking();

  const decrement: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increment: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  const handleCheckbox: MouseEventHandler<HTMLInputElement> = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    registerConferenceCheck({
      count,
      date,
      isChecked,
      time,
    });
  }, [count, date, isChecked, registerConferenceCheck, time]);

  return (
    <div className="my-8 flex items-center justify-center gap-4">
      <input
        checked={isChecked}
        className="sr-only"
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
