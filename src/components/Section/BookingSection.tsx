import { useId } from "react";

import { conferences } from "../../data/conferences";
import { ConferenceCard } from "../Card/ConferenceCard";
import { ContentBoxLayout } from "../Layout/ContentBoxLayout";
import { Separator } from "../Separator";
import { Tag } from "../Tag";
import { Landmark } from "../ui/Landmark/Landmark";

export const BookingSection = () => {
  const id = useId();

  return (
    <Landmark TagName="section" aria-labelledby={id}>
      <ContentBoxLayout>
        <div className="flex flex-col gap-1 800:text-right">
          <Tag aria-hidden className="self-start 800:self-end">
            Conférence inédite
          </Tag>

          <div className="flex flex-col gap-1">
            <Landmark.Heading
              className="relative max-w-h1 text-xl font-bold 800:ml-auto"
              id={id}
            >
              Réservez vos places pour la conférence sur les challenges de
              l’accessibilité numérique
              <Separator className="absolute bottom-[-0.78125rem] left-0 bg-turquoise 800:left-auto 800:right-0" />
            </Landmark.Heading>

            <p className="text-lg font-bold">Pour un monde digital inclusif</p>
          </div>

          <div className="flex flex-col items-center justify-between gap-1 900:flex-row">
            <div className="flex items-center gap-1">
              <img alt="" src="/logos/inolib-bg.png" />
              <img alt="" src="/logos/seeph_2023.png" />
            </div>

            <p className="max-w-p-narrower text-center 900:text-right 1020:max-w-p-narrow 1180:max-w-p">
              Un contenu inédit à l’occasion de la 27<sup>e</sup> Semaine
              Européenne pour l’Emploi des Personnes Handicapées (SEEPH).
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-2 px-8 800:grid-cols-2 960:grid-cols-4 960:gap-1 960:px-0 1060:gap-2">
            {conferences.map((conference) => (
              <li key={conference.date}>
                <ConferenceCard date={conference.date} time={conference.time} />
              </li>
            ))}
          </ul>
        </div>
      </ContentBoxLayout>
    </Landmark>
  );
};
