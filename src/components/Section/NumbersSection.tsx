import { numbers } from "../../data";
import { styles } from "../../styles";
import { Landmark } from "../ui/Landmark/Landmark";

export const NumbersSection = () => {
  return (
    <Landmark
      TagName="section"
      aria-label="Quelques chiffres"
      className="mb-2 flex flex-col gap-2"
    >
      <ul className="grid w-fit grid-cols-1 gap-2 self-center text-center sm:grid-cols-2 lg:grid-cols-4">
        {numbers.map((data) => (
          <li aria-label={data.label} className="max-w-xs" key={data.title}>
            <span className={styles.heading.h3}>{data.title}</span>
            <br />
            <span>{data.description}</span>
          </li>
        ))}
      </ul>
    </Landmark>
  );
};
