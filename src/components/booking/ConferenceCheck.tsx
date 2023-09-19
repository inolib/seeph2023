import { useState, type MouseEventHandler } from "react";

type Props = {
  date: string;
  hours: string;
};

export const ConferenceCheck = ({ date, hours }: Props) => {
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
    <div className="my-8 flex justify-center">
      <input id="20-11" name="20-11" type="checkbox" />
      <label htmlFor="20-11">
        <span>{date}</span>
        <span>{hours}</span>
      </label>

      <div>
        <button aria-label="Diminuez la quantité de places" onClick={decrement}>
          -
        </button>
        <input id="" name="" readOnly type="text" value={count} />
        <button
          aria-label="Augmentez la quantité de places"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};
