import { CallToActionLink } from "../Link/CallToActionLink";
import { Separator } from "../Separator";

type Props = {
  date: string;
  time: string;
};

export const ConferenceCard = ({ date, time }: Props) => {
  return (
    <div className="flex flex-col items-center gap-1 rounded-2 rounded-tr-none bg-blue-dark p-2 text-center text-lg text-white">
      <p className="relative w-full">
        En direct
        <Separator className="absolute inset-x-0 bottom-[-0.78125rem] mx-auto bg-turquoise" />
      </p>

      <p>
        {date}
        <br />
        <span className="text-turquoise">{time}</span>
      </p>

      <CallToActionLink>Réservez</CallToActionLink>
    </div>
  );
};
