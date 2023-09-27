import { useLocation } from "react-router-dom";

import { ContentBoxLayout } from "../Layout/ContentBoxLayout";
import { CallToActionLink } from "../Link/CallToActionLink";
import { Logo } from "../Logo/Logo";
import { Separator } from "../Separator";
import { Tag } from "../Tag";
import { Landmark } from "../ui/Landmark/Landmark";

export const Header = () => {
  const location = useLocation();

  const isHomeRoute = location.pathname === "/";

  return (
    <Landmark
      TagName="header"
      className="flex flex-col items-end gap-4 overflow-hidden bg-gradient-to-b from-purple to-blue-dark text-white 960:gap-0"
    >
      <ContentBoxLayout
        className={`w-full !pt-2 ${!isHomeRoute ? "pb-0" : ""}`}
      >
        <div className="flex items-center gap-1">
          <Logo />

          <p className="text-sm">
            Votre partenaire en accessibilité numérique
            <br />
            et solutions digitales
          </p>
        </div>

        <div className="relative mt-2 flex max-h-[52rem] flex-col flex-wrap 900:flex-row 900:flex-nowrap 900:justify-between 900:gap-2">
          <div className="flex flex-col items-start gap-1">
            <Tag aria-hidden>Conférence</Tag>

            <Landmark.Heading className="flex flex-col">
              <span className="max-w-h1 text-xl font-bold">
                L’accessibilité numérique, un monde d’opportunités
              </span>
            </Landmark.Heading>

            <div className="flex items-center">
              <img alt="" className="h-[1.875rem]" src="/icons/calendar.svg" />

              <p className="ml-1 text-turquoise">4 sessions en novembre</p>
            </div>

            <ul
              aria-label="Les points clés de la conférence"
              className={`mt-3 flex max-w-[30ch] flex-col gap-1 ${
                !isHomeRoute ? "hidden" : ""
              }`}
            >
              <li className="flex flex-initial items-start gap-1">
                <span className="relative top-0.25 flex h-2 w-2 flex-none items-center justify-center rounded-full bg-magenta">
                  <img alt="" className="h-1 w-1" src="/icons/sticker.svg" />
                </span>

                <p>
                  Appréhendez les enjeux et l’importance de l’accessibilité
                  numérique.
                </p>
              </li>

              <li className="flex flex-initial items-start gap-1">
                <span className="relative top-0.25 flex h-2 w-2 flex-none items-center justify-center rounded-full bg-magenta">
                  <img alt="" className="h-1 w-1" src="/icons/line_chart.svg" />
                </span>

                <p>
                  Comprenez les avantages offerts par l’accessibilité numérique
                  aux entreprises.
                </p>
              </li>

              <li className="flex flex-initial items-start gap-1">
                <span className="relative top-0.25 flex h-2 w-2 flex-none items-center justify-center rounded-full bg-magenta">
                  <img alt="" className="h-1 w-1" src="/icons/feather.svg" />
                </span>

                <p>
                  Découvrez des témoignages et des démonstrations pour faciliter
                  la compréhension.
                </p>
              </li>
            </ul>
          </div>

          <div className="absolute order-last mt-4 flex-none self-end 900:relative 900:order-none 900:mt-0 900:self-auto">
            <img
              alt=""
              className="hidden h-30 900:block"
              src="/illustrations/header.png"
            />

            <CallToActionLink
              className={`hidden 900:absolute 900:left-5 900:block 900:w-fit ${
                !isHomeRoute ? "hidden" : ""
              }`}
            >
              Réservez maintenant
            </CallToActionLink>
          </div>

          <div
            className={`absolute bottom-0 right-0 hidden max-w-[20ch] flex-col items-end gap-1 self-end text-right 900:relative 900:bottom-auto 900:right-auto 900:self-auto ${
              !isHomeRoute ? "800:flex" : "600:flex"
            }`}
          >
            <img
              alt=""
              className="max-h-[10rem] max-w-[10rem]"
              src="/avatars/djebrine.png"
            />

            <p className="relative">
              <span className="text-lg">Djebrine ALOUI</span>
              <br />
              Fondateur et CEO INOLIB
              <Separator className="absolute bottom-[-0.78125rem] right-0 bg-turquoise" />
            </p>

            <p className="italic">
              {"« Venez explorer les clés de la révolution numérique »"}
            </p>
          </div>
        </div>
      </ContentBoxLayout>

      <ul
        aria-label="Nos partenaires"
        className={`relative z-0 flex w-full flex-wrap items-center justify-center gap-2 bg-white px-6 py-1 before:absolute before:-left-3 before:h-6 before:w-6 before:bg-white 600:max-w-none 600:grid-cols-none 600:flex-nowrap 800:w-max 800:rounded-tl-3 ${
          !isHomeRoute ? "900:-mt-10" : ""
        }`}
      >
        <li className="flex-none">
          <img
            alt="La Poste"
            className="h-[4.902rem]"
            src="/logos/la_poste.png"
          />
        </li>
        <li className="flex-none">
          <img
            alt="atomota"
            className="h-[3.0392rem]"
            src="/logos/atomota.png"
          />
        </li>
        <li className="flex-none">
          <img
            alt="Agence MADI"
            className="h-[5rem]"
            src="/logos/madiweb.png"
          />
        </li>
        <li className="flex-none">
          <img
            alt="Blurry Ads"
            className="h-[1.9608rem]"
            src="/logos/blurry_ads.png"
          />
        </li>
      </ul>
    </Landmark>
  );
};
