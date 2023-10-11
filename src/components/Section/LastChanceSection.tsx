import { useId } from "react";

import { cn } from "../../helpers";
import { styles } from "../../styles";
import { Logo } from "../Image/Logo";
import { CallToActionLink } from "../Link/CallToActionLink";
import { Landmark } from "../ui/Landmark/Landmark";

export const LastChanceSection = () => {
  const id = useId();

  return (
    <Landmark
      TagName="section"
      aria-labelledby={id}
      className={cn(
        styles.bleeding.middle,
        "bg-gradient-to-b from-white from-50% to-black to-50%",
      )}
    >
      <div className="mx-auto flex w-fit flex-col items-center gap-2 rounded-3xl bg-blue-dark p-2 text-white">
        <Logo />

        <div className="flex flex-col gap-1 text-center">
          <Landmark.Heading
            aria-label="Conférence « L’accessibilité numérique, un monde d’opportunités »"
            className={cn(styles.heading.h2, "flex flex-col gap-0.5")}
            id={id}
          >
            <span>Conférence</span>
            <span>L’accessibilité numérique, un monde d’opportunités</span>
          </Landmark.Heading>

          <p className={styles.heading.sub}>Places en quantité limitée</p>
        </div>

        <CallToActionLink>Réservez votre place</CallToActionLink>
      </div>
    </Landmark>
  );
};
