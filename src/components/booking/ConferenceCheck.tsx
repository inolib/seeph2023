import { useState, type MouseEventHandler } from "react";

type Props = {
  date: string;
  hours: string;
  confId: string;
  countId: string;
};

export const ConferenceCheck = ({ date, hours, confId, countId }: Props) => {
  const [count, setCount] = useState(0);

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

  return (
    <div className="my-8 flex items-center justify-center gap-8">
      <input id={confId} name="20-11" type="checkbox" />
      <label className="flex flex-col text-center" htmlFor={confId}>
        <span>{date}</span>
        <span>{hours}</span>
      </label>

      <div className="">
        <button
          aria-label={`Diminuez la quantité de places pour le ${date}`}
          className="rounded-lg bg-green-400 px-4 py-2 hover:bg-blue-500"
          onClick={decrement}
        >
          -
        </button>
        <input
          className="w-8 text-center"
          id={countId}
          name=""
          readOnly
          type="text"
          value={count}
        />
        <button
          aria-label={`Augmentez la quantité de places pour le ${date}`}
          className="rounded-lg bg-green-400 px-4 py-2 hover:bg-blue-500"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};
