import { useId } from "react";

import { program } from "../../data";
import { cn } from "../../helpers";
import { styles } from "../../styles";
import { Landmark } from "../ui/Landmark/Landmark";

export const ProgramSection = () => {
  const id = useId();
  const subsectionIds = [useId(), useId(), useId(), useId()];

  return (
    <Landmark TagName="section" aria-labelledby={id}>
      <div className="flex flex-col gap-1">
        <Landmark.Heading
          className={cn(
            styles.heading.h2,
            styles.separator.turquoise,
            styles.shrink,
          )}
          id={id}
        >
          Explorons les opportunités pour votre entreprise
        </Landmark.Heading>

        <p className={styles.heading.sub}>Au programme de la conférence</p>
      </div>

      <div className="mt-2 flex flex-col gap-2 sm:max-h-30 sm:flex-wrap">
        {program.map((data, index) => (
          <Landmark
            TagName="section"
            aria-labelledby={subsectionIds[index]}
            className={cn("flex flex-col gap-1 sm:max-w-[calc(50%-1.5rem)]")}
            key={data.title}
          >
            <Landmark.Heading
              className={styles.heading.h3}
              id={subsectionIds[index]}
            >
              {data.title}
            </Landmark.Heading>

            <p>{data.description}</p>
          </Landmark>
        ))}

        <img
          alt=""
          className="sm:max-w-[calc(50%-1.5rem)]"
          src="/illustrations/program_section.png"
        />
      </div>
    </Landmark>
  );
};
