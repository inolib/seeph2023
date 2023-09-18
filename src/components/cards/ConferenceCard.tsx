import { CallToActionLink } from "../links/CallToActionLink";

type Props = {
  date: string;
  time: string;
};

export const ConferenceCard = ({ date, time }: Props) => {
  return (
    <div className="background m-4 flex flex-col items-center rounded-b-3xl rounded-tl-3xl px-4 py-12 text-2xl text-white">
      <p className="text-center">Conférence en ligne</p>

      <p className=" m-2 text-center">
        <span className="">{date}</span>
        <br />
        <span className="text-green-400">{time}</span>
      </p>

      <CallToActionLink label="Réservez 70 €" />
    </div>
  );
};
