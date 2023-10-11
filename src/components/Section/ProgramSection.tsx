import { useId } from "react";

import { program } from "../../data";
import { cn } from "../../helpers";
import { styles } from "../../styles";
import { Landmark } from "../ui/Landmark/Landmark";
import { ExternalLink } from "../Link/ExternalLink";

export const ProgramSection = () => {
  const id = useId();

  return (
    <Landmark TagName="section" aria-labelledby={id} className="relative mb-2">
      <div className="flex flex-col gap-1">
        <Landmark.Heading
          className={cn(
            styles.heading.h2,
            styles.separator.turquoise,
            "max-w-xs",
          )}
          id={id}
        >
          Explorez les opportunités pour votre entreprise
        </Landmark.Heading>

        <p className={styles.heading.sub}>Au programme</p>
      </div>

      <ul className="mt-2 flex flex-col gap-2 sm:max-h-40 sm:flex-wrap">
        {program.map((data, index) =>
          index === 3 ? (
            <li
              className="flex flex-col gap-1 sm:max-w-[calc(50%-1.5rem)]"
              key={data.title}
            >
              <p className={styles.heading.h3}>{data.title}</p>

              <p>{data.description}</p>

              <img
                alt=""
                className="mt-1 max-h-12 self-center"
                src="/illustrations/program.png"
              />
            </li>
          ) : (
            <li
              className="flex flex-col gap-1 sm:max-w-[calc(50%-1.5rem)]"
              key={data.title}
            >
              <p className={styles.heading.h3}>{data.title}</p>

              <p>{data.description}</p>
            </li>
          ),
        )}
      </ul>

      <ExternalLink
        href="https://www.inolib.com/"
        className={cn(
          styles.link,
          styles.heading.h3,
          "absolute right-0 -bottom-5 z-10 max-w-xs text-right sm:text-left sm:max-w-fit",
        )}
      >
        En savoir plus sur les ambitions d’INOLIB
      </ExternalLink>
    </Landmark>
  );
};
