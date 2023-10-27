import { useId } from "react";

import { program } from "../../data";
import { cn } from "../../helpers";
import { styles } from "../../styles";
import { ExternalLink } from "../Link/ExternalLink";
import { Landmark } from "../ui/Landmark/Landmark";

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

              <div className="mt-1 flex w-full self-center">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="shrink grow"
                  frameBorder="0"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/Ky2htR6MKiw?si=oWqkiIOVetJnNJZe"
                  title="Vidéo de présentation"
                  width="560"
                ></iframe>
              </div>
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
        className={cn(
          styles.link,
          styles.heading.h3,
          "absolute -bottom-5 right-0 z-10 max-w-xs text-right sm:max-w-fit sm:text-left",
        )}
        href="https://www.inolib.com/"
      >
        En savoir plus sur les ambitions d’INOLIB
      </ExternalLink>
    </Landmark>
  );
};
