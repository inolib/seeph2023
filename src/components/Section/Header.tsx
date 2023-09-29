import { useLocation } from "react-router-dom";

import { keypoints, speaker } from "../../data";
import { cn } from "../../helpers";
import { styles } from "../../styles";
import { Icon } from "../Image/Icon";
import { PhotoFrame } from "../Image/PhotoFrame";
import { CallToActionLink } from "../Link/CallToActionLink";
import { Tag } from "../Tag";
import { Landmark } from "../ui/Landmark/Landmark";
import { PartnerSection } from "./PartnerSection";

export const Header = () => {
  const location = useLocation();

  const isHomeRoute = location.pathname === "/";

  return (
    <Landmark
      TagName="header"
      className={cn(
        styles.background.gradientToBlue,
        styles.bleeding.top,
        "flex flex-col gap-2 overflow-hidden",
      )}
    >
      <div className="flex items-center gap-1">
        <img alt="INOLIB" className="h-2" src="/logos/inolib.svg" />

        <p className="max-w-sm text-sm">
          Votre partenaire en accessibilité numérique et solutions digitales
        </p>
      </div>

      <div className="relative flex flex-col gap-2 sm:flex-row sm:justify-between">
        <img
          alt=""
          className="absolute hidden h-full opacity-25 md:left-[30%] md:block lg:left-[35%]"
          src="/illustrations/header.png"
        />

        <div className="z-0 flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
          <Tag aria-hidden>Conférence</Tag>

          <Landmark.Heading className={styles.heading.h1}>
            L’accessibilité numérique, un monde d’opportunités
          </Landmark.Heading>

          <div className="flex items-center gap-0.5 text-turquoise">
            <img alt="" className="h-1" src="/icons/calendar.svg" />

            <p>4 sessions en novembre</p>
          </div>

          <ul
            aria-label="Les points clés de la conférence"
            className={cn("hidden sm:mt-1 sm:flex sm:flex-col sm:gap-2", {
              invisible: !isHomeRoute,
            })}
          >
            {keypoints.map((data) => (
              <li className="flex gap-0.75" key={data.title} role="none">
                <Icon className="relative top-0.25 h-1.5 w-1.5 bg-magenta">
                  <img alt="" className="h-0.75 w-0.75" src={data.iconUrl} />
                </Icon>

                <p className="max-w-sm">{data.title}.</p>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={cn(
            "z-0 flex flex-col items-center gap-1 text-center sm:items-end sm:text-right xl:order-last",
            { "sm:-mt-4": !isHomeRoute },
          )}
        >
          <PhotoFrame>
            <img
              alt=""
              className="h-6 w-6 scale-x-[-1] grayscale"
              src={speaker.photoUrl}
            />
          </PhotoFrame>

          <p className={cn(styles.separator.turquoise, "-mt-0.75")}>
            <span className="text-xl font-bold">{speaker.name}</span>
            <br />
            {speaker.jobTitle}
          </p>

          <p className="max-w-xs italic">{speaker.shortQuote}</p>
        </div>

        <CallToActionLink
          className={cn("absolute bottom-0 left-[45%] hidden md:block", {
            "md:hidden": !isHomeRoute,
          })}
        >
          Réservez votre place dès maintenant
        </CallToActionLink>
      </div>

      <PartnerSection isHomeRoute={isHomeRoute} />
    </Landmark>
  );
};
