import { CallToActionLink } from "../links/CallToActionLink";

type Props = {
  date: string;
  time: string;
};

export const ConferenceCard = ({ date, time }: Props) => {
  return (
    <div className="">
      <p className="">Conférence en ligne</p>

      <p className="">
        <span className="">{date}</span>
        <br />
        <span className="">{time}</span>
      </p>

      <CallToActionLink label="Réservez 70 €" />
    </div>
  );
};
