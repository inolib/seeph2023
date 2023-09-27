import { useId } from "react";

import { ContentBoxLayout } from "../Layout/ContentBoxLayout";
import { Separator } from "../Separator";
import { Landmark } from "../ui/Landmark/Landmark";

export const WorkshopSection = () => {
  const id = useId();

  return (
    <Landmark TagName="section" aria-labelledby={id} className="text-white">
      <ContentBoxLayout>
        <div className="bg-orange p-4 shadow-[-3.75rem_3.75rem_0.25rem_0_rgba(226,108,89,0.25)]">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1">
              <Landmark.Heading
                className="relative max-w-h1 text-xl font-bold"
                id={id}
              >
                WORKSHOP Accessibilité
                <Separator className="absolute bottom-[-0.78125rem] left-0 bg-blue" />
              </Landmark.Heading>

              <p className="text-lg">
                C’est simple, l’accessibilité adaptée à vos besoins !
              </p>
            </div>

            <div className="flex flex-col items-start justify-between gap-3 800:flex-row 800:items-end">
              <div className="max-w-p">
                <p>
                  Vous souhaitez effectuer une réservation de groupe pour vos
                  collaborateurs ou vos salariés ?
                </p>

                <p>
                  {
                    "Nous vous proposons un forfait adapté aux groupes et aux entreprises, réservez pour un groupe de 12 personnes en une seule fois."
                  }
                </p>
              </div>

              <a
                className="flex flex-none items-center gap-0.5 rounded-full bg-blue px-2 py-1 text-center text-white hover:bg-turquoise hover:text-black"
                href="##"
              >
                Réservez avec
                <img
                  alt=""
                  className="relative top-[0.25rem] h-[1.875rem]"
                  src="/logos/atomota.png"
                />
              </a>
            </div>
          </div>
        </div>
      </ContentBoxLayout>
    </Landmark>
  );
};
