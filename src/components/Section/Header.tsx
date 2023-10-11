import { useLocation } from "react-router-dom";

import { headerKeypoints, speaker } from "../../data";
import { cn } from "../../helpers";
import { styles } from "../../styles";
import { Icon } from "../Image/Icon";
import { Logo } from "../Image/Logo";
import { PhotoFrame } from "../Image/PhotoFrame";
import { CallToActionLink } from "../Link/CallToActionLink";
import { Live } from "../Live";
import { Tag } from "../Tag";
import { Landmark } from "../ui/Landmark/Landmark";
import { PartnersSection } from "./PartnersSection";

export const Header = () => {
  const location = useLocation();

  const isHomeRoute = location.pathname === "/";

  return (
    <Landmark
      TagName="header"
      className={cn(
        styles.background.gradientToBlue,
        styles.bleeding.top,
        "relative z-0 flex flex-col gap-2 overflow-hidden pb-0 md:before:absolute md:before:left-12 md:before:top-0 md:before:-z-10 md:before:h-[727px] md:before:w-[778px] md:before:bg-[url('/illustrations/header.png')] md:before:bg-contain md:after:absolute md:after:bottom-0 md:after:left-0 md:after:right-0 md:after:top-25 md:after:-z-10 md:after:origin-right md:after:-skew-y-3 md:after:bg-blue-dark lg:before:left-14 lg:before:h-[830px] lg:before:w-[889px] xl:before:left-16 xl:before:h-[934px] xl:before:w-[1000px] 2xl:before:left-18 2xl:before:h-[1038px] 2xl:before:w-[1111px]",
      )}
    >
      <div className="flex items-center gap-1">
        <Logo alt="INOLIB" />

        <p className="max-w-[28ch] text-sm font-bold">
          Votre allié en accessibilité numérique et solutions digitales
        </p>
      </div>

      <div className="flex flex-col items-center gap-2 sm:items-start">
        <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
          <div className="flex items-center gap-1">
            <Tag aria-hidden>Conférence</Tag>
            <Live aria-label="En direct">Live</Live>
          </div>

          <Landmark.Heading className={styles.heading.h1}>
            L’accessibilité numérique, un monde d’opportunités
          </Landmark.Heading>

          <div className="flex items-center gap-1 text-turquoise">
            <img alt="" className="h-1" src="/icons/calendar.svg" />

            <p className="before:relative before:right-0.5 before:top-0.125 before:inline-block before:h-[1rem] before:border-[1px]">
              4 sessions en novembre
            </p>
          </div>
        </div>

        <div
          className={cn(
            "flex w-full flex-col items-center gap-2 sm:flex-row sm:items-end sm:justify-around md:flex-col md:items-start md:justify-start",
            {
              invisible: !isHomeRoute,
            },
          )}
        >
          <div className="flex flex-col items-center gap-0.5 text-center sm:items-start sm:text-left md:flex-row md:items-center md:gap-1">
            <PhotoFrame>
              <img
                alt=""
                className="h-6 w-6 scale-x-[-1] grayscale"
                src={speaker.photoUrl}
              />
            </PhotoFrame>

            <div className="flex flex-col gap-1">
              <p
                className={cn(
                  styles.separator.center,
                  styles.separator.turquoise,
                  "flex flex-col text-xl font-bold sm:before:inset-x-auto sm:before:mx-0",
                )}
              >
                {speaker.name}
              </p>

              <p>{speaker.jobTitle}</p>

              <p className="-mt-0.5 max-w-xs italic">{speaker.shortQuote}</p>
            </div>
          </div>

          <ul
            aria-label="Les points clés de la conférence"
            className="flex flex-col gap-1 text-left md:mt-2 md:grid md:grid-cols-3 md:gap-2"
          >
            {headerKeypoints.map((data) => (
              <li
                className="relative flex gap-0.75 md:before:absolute md:before:-left-1 md:before:top-[25%] md:before:inline-block md:before:h-[50%] md:before:border-[1px] md:first:before:hidden"
                key={data.title}
              >
                <Icon className="relative top-0.25 h-1.5 w-1.5 bg-magenta">
                  <img alt="" className="h-0.75 w-0.75" src={data.iconUrl} />
                </Icon>

                <p className="max-w-base">{data.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <CallToActionLink
          className={cn(
            "sm:self-center md:absolute md:right-2 md:top-25 xl:right-4 2xl:right-12",
            {
              hidden: !isHomeRoute,
            },
          )}
        >
          Réservez votre place maintenant
        </CallToActionLink>
      </div>

      <PartnersSection />
    </Landmark>
  );
};
